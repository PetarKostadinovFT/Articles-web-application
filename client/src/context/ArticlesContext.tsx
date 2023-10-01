import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

import { IArticle } from "../interfaces/artticleInterface";

interface ArticleContextProps {
  articles: IArticle[];
  loading: boolean;
  setArticles: Dispatch<SetStateAction<IArticle[]>>;
  currPage: number;
  setCurrPage: Dispatch<SetStateAction<number>>;
}

const ArticleContext = createContext<ArticleContextProps | undefined>(
  undefined
);

interface ArticleProviderProps {
  children: ReactNode;
}

export const ArticleProvider: React.FC<ArticleProviderProps> = ({
  children,
}) => {
  const [error, setError] = useState<string | null>(null);
  const [currPage, setCurrPage] = useState<number>(1);
  const [articles, setAllArticles] = useState<IArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const setArticlesData: Dispatch<SetStateAction<IArticle[]>> = (data) => {
    setAllArticles(data);
  };

  return (
    <ArticleContext.Provider
      value={{
        articles,
        loading,
        setArticles: setArticlesData,
        currPage,
        setCurrPage: setCurrPage,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticle = (): ArticleContextProps => {
  const context = useContext(ArticleContext);
  if (context === undefined) {
    throw new Error("useArticle must be used within an ArticleProvider");
  }
  return context;
};
