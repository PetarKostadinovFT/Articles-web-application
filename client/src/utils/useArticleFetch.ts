import { useState } from "react";
import { fetchArticles } from "./fetchArticles";
import { IArticle } from "../interfaces/artticleInterface"; 

export function useArticleFetch() {
  const [allArticles, setAllArticles] = useState<IArticle[]>([]); 
  const [error, setError] = useState<string | null>(null); 
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [queryString, setQueryString] = useState<string>("");
 
  const [pageNumber, setCurrPage] = useState<number>(1);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
   
    setQueryString(event.target.value);
  };

  const fetchData = async () => {
    setIsLoading(true);
  
    try {

      const fetchedArticles = await fetchArticles(queryString, pageNumber);
  
      if (fetchedArticles) {
        setAllArticles(fetchedArticles);
        setError(null);
      } else {
        setAllArticles([]);
        setError("No articles found.");
      }
    } catch (error) {
      setAllArticles([]);
      setError("Error loading news. Please try again later.");
    }
  
    setIsLoading(false);
  };
  
  return {
    allArticles,
    error,
    isLoading,
    queryString,
    setQueryString,
    handleSearchChange,
    fetchArticles: fetchData,
    pageNumber, 
    setCurrPage,
    
  };
}

export default useArticleFetch;
