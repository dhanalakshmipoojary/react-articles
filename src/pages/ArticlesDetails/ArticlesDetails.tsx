import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApiServices from "../../_services/ApiService";
import { Card, Header } from "../../components";
import style from "./ArticlesDetails.module.scss";

interface IArticleList {
  id: string;
  title: string;
  summary: string;
  fullText: string;
}

function ArticlesDetails() {
  const [articlesList, setArticlesList] = useState<IArticleList>({
    id: "",
    title: "",
    summary: "",
    fullText: "",
  });
  const [notifications, setNotifications] = useState(null);
  const navigate = useNavigate();
  const { articleId } = useParams();

  useEffect(() => {
    ApiServices.get(`/assignment/articles/${articleId}`)
      .then((data) => {
        console.log("articlesList", data);
        setArticlesList(data);
      })
      .catch((error) => setNotifications(error.message));
  }, []);

  const renderError = notifications ? (
    <div className={notifications}>{notifications}</div>
  ) : null;

  const renderArticles = articlesList ? (
    <div>
      <h1>{articlesList.title}</h1>
      <p>{articlesList.summary}</p>
      <p>{articlesList.fullText}</p>
    </div>
  ) : null;

  return (
    <div>
      <Header title="News Details" />
      <div className={style.articlesDetails}>
        {notifications ? renderError : renderArticles}
      </div>
    </div>
  );
}

export default ArticlesDetails;
