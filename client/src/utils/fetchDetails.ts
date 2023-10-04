import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { IArticle } from "../interfaces/artticleInterface";

export async function fetchDetails(id:any): Promise<IArticle[]> {
  try {
  
    const response: AxiosResponse<IArticle[]> = await axios.get(`/api/details/${id}`);

    return response.data;
  } catch (error) {
    throw error;
  }
}