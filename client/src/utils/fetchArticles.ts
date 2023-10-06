import axios, { AxiosError, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { IArticle } from "../interfaces/artticleInterface";

export async function fetchArticles(queryString: string, pageNumber: number): Promise<IArticle[]> {
  try {
    const token = Cookies.get("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response: AxiosResponse<IArticle[]> = await axios.post(
      `/api/articles/page/${pageNumber}`,
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
    // Explicitly cast error to AxiosError
    const axiosError = error as AxiosError;

    // Handle the error as needed, e.g., logging or rethrowing
    console.error(axiosError);

    // Rethrow the error or return an empty array based on your logic
    throw axiosError;
  }
}
