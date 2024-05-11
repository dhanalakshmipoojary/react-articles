import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticleDetails } from "../../store/action";
import { RootState, AppDispatch } from "../../store/store";
import { Card, Header, Text, Loader } from "../../components";
import style from "./ArticlesDetails.module.scss";

interface IArticleList {
  id: string;
  title: string;
  summary: string;
  fullText: string;
}

function ArticlesDetails() {
  const navigate = useNavigate();
  const { articleId = "" } = useParams();

  const dispatch = useDispatch<AppDispatch>();
  const articleDetails = useSelector(
    (state: RootState) => state.articles.selectedArticle
  );
  const error = useSelector((state: RootState) => state.articles.error);

  useEffect(() => {
    if (articleId) {
      dispatch(fetchArticleDetails(articleId));
    }
  }, []);

  const renderError = error ? (
    <div className={style.error}>
      <Loader />
      <Text id="DATA_FETCH_ERROR" />
    </div>
  ) : null;

  const renderArticles = articleDetails ? (
    <div>
      <h1>{articleDetails.title}</h1>
      <p>{articleDetails.summary}</p>
      <p>{articleDetails.fullText}</p>
    </div>
  ) : null;

  return (
    <div>
      <Header title="News Details" />
      <div className={style.articlesDetails}>
        {error ? renderError : renderArticles}
      </div>
    </div>
  );
}

export default ArticlesDetails;
