import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { IArticle } from "../interfaces/artticleInterface";

export async function fetchArticleDetails(id:any): Promise<IArticle[]> {
  try {
    const token = Cookies.get("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response: AxiosResponse<IArticle[]> = await axios.get(`/api/details/${id}`);

    return response.data;
  } catch (error) {
    throw error;
  }
}
