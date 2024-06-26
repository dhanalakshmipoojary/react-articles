import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../store/action";
import { RootState, AppDispatch } from "../../store/store";
import { Card, Header, Text } from "../../components";
import ArticleSuspense from "../../components/ArticleSuspense/ArticleSuspense";
import style from "./ArticlesList.module.scss";

function ArticlesList() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const articles = useSelector((state: RootState) => state.articles.articles);
  const loadingList = useSelector(
    (state: RootState) => state.articles.loadingList
  );

  useEffect(() => {
    dispatch(fetchArticles());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleReadMore = useCallback((id: string) => {
    navigate(`/detail/${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderArticles = useCallback(() => (
    articles.length > 0 ? (
      <div className={style.articles}>
        {articles.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            summary={card.summary}
            onClick={() => handleReadMore(card.id)}
          />
        ))}
      </div>
    ) : null
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ), [articles])


  return (
    <div>
      <Header title={<Text id="SITE_NAME" />} />
      <ArticleSuspense loading={loadingList}>
        {renderArticles()}
      </ArticleSuspense>
    </div>
  );
}

export default ArticlesList;
