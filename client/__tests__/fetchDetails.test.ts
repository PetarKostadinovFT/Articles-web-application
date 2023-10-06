import axios, { AxiosResponse } from "axios";
import { fetchDetails } from "../src/utils/fetchDetails"; 
import { IArticle } from "../src/interfaces/artticleInterface";

jest.mock("axios");

describe("fetchDetails Function", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch details successfully", async () => {
    const id = "123";
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

    const axiosResponse: AxiosResponse<IArticle[]> = {
      data: responseData,
      status: 200,
      statusText: "OK",
      headers: { "content-type": "application/json" },
      config: {} as unknown as AxiosResponse<IArticle[]>['config'],
    };

    (axios.get as jest.Mock).mockResolvedValueOnce(axiosResponse);

    const result = await fetchDetails(id);

    expect(axios.get).toHaveBeenCalledWith(`/api/details/${id}`);
    expect(result).toEqual(responseData);
  });

  it("should handle fetch failure", async () => {
    const id = "123";
    const errorMessage = "Fetch failed";

    (axios.get as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

    try {
      await fetchDetails(id);
    } catch (error: any) {
      expect(axios.get).toHaveBeenCalledWith(`/api/details/${id}`);
      expect(error.message).toBe(errorMessage);
    }
  });
});
