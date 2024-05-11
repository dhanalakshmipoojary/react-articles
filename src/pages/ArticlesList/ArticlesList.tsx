import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../store/action";
import { RootState, AppDispatch } from "../../store/store";
import { Card, Header, Text, Loader } from "../../components";
import style from "./ArticlesList.module.scss";

function ArticlesList() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const articles = useSelector((state: RootState) => state.articles.articles);
  const error = useSelector((state: RootState) => state.articles.error);

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  const handleReadMore = (id: string) => {
    navigate(`/detail/${id}`);
  };

  const renderError = error ? (
    <div className={style.error}>
      <Loader />
      <Text id="DATA_FETCH_ERROR" />
    </div>
  ) : null;

  const renderArticles = (
    <div className={style.articles}>
      {articles.length > 0
        ? articles.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              summary={card.summary}
              onClick={() => handleReadMore(card.id)}
            />
          ))
        : null}
    </div>
  );

  return (
    <div>
      <Header title="News" />
      {error ? renderError : renderArticles}
    </div>
  );
}

export default ArticlesList;
