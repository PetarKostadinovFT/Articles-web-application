import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { IArticle } from "../interfaces/artticleInterface";

export async function fetchArticles(queryString: string, pageNumber:number): Promise<IArticle[]> {
  try {
    const token = Cookies.get("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response: AxiosResponse<IArticle[]> = await axios.post(
      "/api/articles/home",
      {
        queryString,
        pageNumber,    
      },
      {
        headers,
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}
