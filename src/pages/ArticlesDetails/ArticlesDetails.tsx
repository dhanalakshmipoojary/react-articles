import React, { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticleDetails } from "../../store/action";
import { RootState, AppDispatch } from "../../store/store";
import { Card, Header, Text, Loader } from "../../components";
import style from "./ArticlesDetails.module.scss";
import ArticleSuspense from "../../components/ArticleSuspense/ArticleSuspense";

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
  const requestInProgress = useSelector(
    (state: RootState) => state.articles.loadingDetails
  );

  useEffect(() => {
    if (articleId) {
      dispatch(fetchArticleDetails(articleId));
    }
  }, []);

  const renderDetails = useCallback(() => (
    articleDetails ? (
      <div>
        <h1>{articleDetails.title}</h1>
        <p>{articleDetails.summary}</p>
        <p>{articleDetails.fullText}</p>
      </div>
    ) : null
  ), [articleDetails])

  return (
    <div>
      <Header title={<Text id="NEWS_DETAILS" />} />
      <ArticleSuspense loading={requestInProgress}>
        {renderDetails()}
      </ArticleSuspense>
    </div>
  );
}

export default ArticlesDetails;
