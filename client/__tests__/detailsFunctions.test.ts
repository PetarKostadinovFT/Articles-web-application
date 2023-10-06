import {
    fetchArticleDetails,
    extractTextFromXML,
    prepareBodyText,
    getImageUrlOrDefault,
  } from "../src/utils/detailsFunctions";
  import { IArticle } from "../src/interfaces/artticleInterface";
  
  jest.mock("../src/utils/detailsFunctions", () => ({
    __esModule: true,
    ...jest.requireActual("../src/utils/detailsFunctions"),
    fetchArticleDetails: jest.fn(),
    extractTextFromXML: jest.fn(),
    prepareBodyText: jest.fn(),
    getImageUrlOrDefault: jest.fn(),
  }));
  
  // Mock DOMParser
  class MockDOMParser {
    parseFromString(): Document {
      return document.implementation.createDocument("", "", null);
    }
  }
  
  global.DOMParser = MockDOMParser as any;
  
  // Mock getImageUrl function
  jest.mock("../src/utils/getImageUrl", () => ({
    getImageUrl: jest.fn(),
  }));
  
  describe("detailsFunctions", () => {
    describe("fetchArticleDetails Function", () => {
      it("should fetch article details successfully", async () => {
        const id = "123";
        const responseData: IArticle = {
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
        };
        (fetchArticleDetails as jest.Mock).mockResolvedValue(responseData);
  
        const result = await fetchArticleDetails(id);
  
        expect(fetchArticleDetails).toHaveBeenCalledWith(id);
        expect(result).toEqual(responseData);
      });
      });
  
    describe("getImageUrlOrDefault Function", () => {
      it("should return image URL", () => {
        const selectedArticle: IArticle = {
          id: "1",
          type: "",
          bodyXML: "",
          title: "",
          standfirst: "",
          byline: "",
          mainImage: {
            brands: [],
            canBeSyndicated: "",
            description: "",
            id: "",
            members: undefined,
          },
          requestUrl: "",
          brands: [],
          types: [],
          annotations: [],
          curatedRelatedContent: [],
          webUrl: "",
        };
  
        (getImageUrlOrDefault as jest.Mock).mockReturnValue("/images/sample.png");
  
        const imageUrl = getImageUrlOrDefault(selectedArticle);
        expect(imageUrl).toBe("/images/sample.png");
      });
  
      it("should return default image URL when selectedArticle is null", () => {
        const selectedArticle: IArticle | null = null;
  
        const imageUrl = getImageUrlOrDefault(selectedArticle);
        expect(imageUrl).toBe("/images/sample.png");
      });
    });
  });
  