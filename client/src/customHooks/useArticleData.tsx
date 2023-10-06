import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/userContext";
import { fetchArticles } from "../utils/fetchArticles";
import { IArticle } from "../interfaces/artticleInterface";

export function useArticleData() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated } = useAuth();
  const { pageNumber } = useParams();
  const pageFromUrl = Number(pageNumber);

  const [currPage, setCurrPage] = useState<number>(1);
  const [allArticles, setAllArticles] = useState<IArticle[]>([]);
  const [queryString, setQueryString] = useState<string>("");
  const [hasError, setHasError] = useState(false);

  const handleNextPage = () => {
    const nextPage = pageFromUrl + 1;
    setCurrPage(nextPage);
    navigate(`/articles/page/${nextPage}`);
  };

  const handlePrevPage = () => {
    if (pageFromUrl > 1) {
      const prevPage = pageFromUrl - 1;
      setCurrPage(prevPage);
      navigate(`/articles/page/${prevPage}`);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        if (queryString) {
          const response = await fetchArticles(queryString, pageFromUrl);
          setAllArticles(response);
        } else {
          const response = await fetchArticles(queryString, pageFromUrl);
          setAllArticles(response);
        }
      } catch (error) {
        setHasError(true);
        setIsLoading(false);
      }
    }
    fetchData();
    setIsLoading(false);
  }, [queryString, pageFromUrl]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryString(event.target.value);
  };

  const totalPages = 6;

  return {
    isLoading,
    isAuthenticated,
    currPage,
    allArticles,
    queryString,
    hasError,
    handleNextPage,
    handlePrevPage,
    handleSearchChange,
    totalPages,
  };
}
