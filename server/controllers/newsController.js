const axios = require("axios");
const cache = require("memory-cache");
const jwt = require("jsonwebtoken");

const apiKey = process.env.apiKey;
const cacheDuration = 20 * 60 * 1000; //
const searchUrl = `${process.env.searchUrl}${apiKey}`;

const detailedDataCache = new Map();

const fetchArticles = async (req, res) => {
  let maxResults = 3;
  try {
    const { queryString, pageNumber } = req.body;

    if (req.headers.authorization) {
      try {
        jwt.verify(
          req.headers.authorization.split(" ")[1],
          process.env.JWT_SECRET
        );

        maxResults = 6;
      } catch (error) {
        maxResults = 3;
      }
    } else {
      maxResults = 6;
    }

    const offset = (pageNumber - 1) * maxResults;

    const requestBody = {
      queryString: queryString,
      resultContext: {
        maxResults: maxResults,
        offset: offset,
      },
    };

    const cacheKey = JSON.stringify(requestBody);

    const cachedData = cache.get(cacheKey);

    if (cachedData && queryString === "") {
      const filteredData = cachedData.map((item) => ({
        id: item.id,
        title: item.title,
        standfirst: item.standfirst,
        mainImage: {
          description: item.mainImage
            ? item.mainImage.description
            : "Read more",
          members: item.mainImage ? item.mainImage.members : "",
        },
      }));

      res.json(filteredData);
      return;
    }

    const response = await axios.post(searchUrl, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const articleData = response.data.results;
    const stringifyed = JSON.stringify(articleData);
    const data = JSON.parse(stringifyed);

    const articleIds = data[0].results.map((item) => item.id);

    let detailedContent = [];
    for (let id of articleIds) {
      let singleDetailedInfo = detailedDataCache.get(id);

      if (!singleDetailedInfo) {
        singleDetailedInfo = await fetchArticleDetails(id);
        detailedDataCache.set(id, singleDetailedInfo);
      }

      detailedContent.push(singleDetailedInfo);
    }

    const filteredData = detailedContent.map((item) => ({
      id: item.id,
      title: item.title,
      standfirst: item.standfirst,
      mainImage: {
        description: item.mainImage ? item.mainImage.description : "Read more",
        members: item.mainImage ? item.mainImage.members : "",
      },
    }));
    cache.put(cacheKey, filteredData, cacheDuration);

    res.json(filteredData);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

const fetchArticleDetails = async (id) => {
  try {
    const cachedArticle = cache.get(`article_${id}`);
    if (cachedArticle) {
      return cachedArticle;
    }

    const articleUrl = `https://api.ft.com/enrichedcontent/${id}?apiKey=${apiKey}`;
    const response = await axios.get(articleUrl);
    const articleData = response.data;

    cache.put(`article_${id}`, articleData, cacheDuration);

    return articleData;
  } catch (error) {
    throw new Error(
      `Error fetching article details for ID ${id}: ${error.message}`
    );
  }
};

const fetchArticleGeneralDetails = async (req, res) => {
  const id = req.params.id;
  const cachedArticle = detailedDataCache.get(id);

  if (cachedArticle) {
    res.json([cachedArticle]);
    return;
  }

  try {
    // If the data is not in the cache ????
    res.json([]);
  } catch (error) {
    throw new Error(
      `Error fetching article details for ID ${id}: ${error.message}`
    );
  }
};

module.exports = {
  fetchArticles,
  fetchArticleGeneralDetails,
};
