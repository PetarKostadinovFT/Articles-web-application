const axios = require("axios");
const cache = require("memory-cache");

const apiKey = process.env.apiKey;
const cacheDuration = 20 * 60 * 1000; //
const searchUrl = `https://api.ft.com/content/search/v1?apiKey=${apiKey}`;

const fetchArticles = async (req, res) => {
  try {
    const { queryString, pageNumber } = req.body;

    const maxResults = 6;
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

    if (cachedData) {
      res.json(cachedData);
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
      const singleDetailedInfo = await fetchArticleDetails(id);
      detailedContent.push(singleDetailedInfo);
    }

    cache.put(cacheKey, detailedContent, cacheDuration);

    res.json(detailedContent);
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
  const cachedArticle = cache.get(id);
  if (cachedArticle) {
    res.json([cachedArticle]);
    return;
  }

  try {
    const articleUrl = `https://api.ft.com/enrichedcontent/${id}?apiKey=${apiKey}`;
    const response = await axios.get(articleUrl);
    const articleData = response.data;

    cache.put(id, articleData, 60 * 1000);

    res.json([articleData]);
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
