import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiServices from "../../_services/ApiService";

import { Card, Header } from "../../components";

import style from "./ArticlesList.module.scss";

interface IArticleList {
  id: string;
  title: string;
  summary: string;
}

function ArticlesList() {
  const [articlesList, setArticlesList] = useState<IArticleList[]>([
    {
      id: "",
      title: "",
      summary: "",
    },
  ]);
  const [notifications, setNotifications] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    ApiServices.get("/assignment/articles")
      .then((data) => {
        console.log("articlesList", data);
        setArticlesList(data);
      })
      .catch((error) => setNotifications(error.message));
  }, []); ///assignment/articles/{id}

  const handleReadMore = (id: string) => {
    navigate(`/detail/${id}`);
  };

  const renderError = notifications ? (
    <div className={notifications}>{notifications}</div>
  ) : null;

  const renderArticles =
    articlesList.length > 0
      ? articlesList.map((card) => (
          <Card
            title={card.title}
            summary={card.summary}
            onClick={() => handleReadMore(card.id)}
          />
        ))
      : null;

  return (
    <div>
      <Header title="News" />
      <div className={style.articles}>
        {notifications ? renderError : renderArticles}
      </div>
    </div>
  );
}

export default ArticlesList;
