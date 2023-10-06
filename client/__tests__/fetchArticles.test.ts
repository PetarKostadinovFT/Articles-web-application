import axios, { AxiosError, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { fetchArticles } from "../src/utils/fetchArticles";
import { IArticle } from "../src/interfaces/artticleInterface";

jest.mock("axios");
jest.mock("js-cookie");

describe("fetchArticles Function", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch articles successfully", async () => {
    const queryString = "sample";
    const pageNumber = 1;

    const responseData: IArticle[] = [
      {
        id: "1",
        type: "article",
        bodyXML: "<xml>Sample</xml>",
        title: "Sample Article",
        standfirst: "Standfirst",
        byline: "Author",
        mainImage: {
          brands: ["Brand1", "Brand2"],
          canBeSyndicated: "Yes",
          description: "Image Description",
          id: "2",
          members: [{ binaryUrl: "url1" }],
        },
        requestUrl: "https://example.com",
        brands: ["Brand1"],
        types: ["Type1"],
        annotations: ["Annotation1"],
        curatedRelatedContent: ["Related1"],
        webUrl: "https://example.com/article",
      },
    ];

    (Cookies.get as jest.Mock).mockReturnValueOnce("sample-token");

    const axiosResponse: AxiosResponse<IArticle[]> = {
      data: responseData,
      status: 200,
      statusText: "OK",
      headers: { "content-type": "application/json" },
      config: {},
    } as unknown as AxiosResponse<IArticle[]>; 

    (axios.post as jest.Mock).mockResolvedValueOnce(axiosResponse);

    const result = await fetchArticles(queryString, pageNumber);

    expect(axios.post).toHaveBeenCalledWith(
      `/api/articles/page/${pageNumber}`,
      {
        queryString,
        pageNumber,
      },
      {
        headers: {
          Authorization: `Bearer sample-token`,
        },
      }
    );

    expect(result).toEqual(responseData);
  });

  it("should handle fetch failure", async () => {
    const queryString = "sample";
    const pageNumber = 1;
    const errorMessage = "Fetch failed";

    (Cookies.get as jest.Mock).mockReturnValueOnce(undefined);

    (axios.post as jest.Mock).mockRejectedValueOnce(new Error(errorMessage) as AxiosError);

    try {
      await fetchArticles(queryString, pageNumber);
      fail("Expected fetchArticles to fail but it succeeded.");
    } catch (error) {
   
      console.error(error);

      expect(axios.post).toHaveBeenCalledWith(
        `/api/articles/page/${pageNumber}`,
        {
          queryString,
          pageNumber,
        },
        {
          headers: {
            Authorization: `Bearer undefined`,
          },
        }
      );

      expect((error as AxiosError).message).toBe(errorMessage);
    }
  });
});
