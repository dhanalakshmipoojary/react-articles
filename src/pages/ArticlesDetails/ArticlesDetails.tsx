import React, { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticleDetails } from "../../store/action";
import { RootState, AppDispatch } from "../../store/store";
import { Card, Header, Text, Loader } from "../../components";
import { IArticle } from '../../_types/actionType'
import style from "./ArticlesDetails.module.scss";
import ArticleSuspense from "../../components/ArticleSuspense/ArticleSuspense";


function ArticlesDetails() {
  const navigate = useNavigate();
  const { articleId = "" } = useParams();

  const dispatch = useDispatch<AppDispatch>();

  const { articles, selectedArticle: articleDetails, loadingDetails: requestInProgress } = useSelector((state: RootState) => state.articles);

  useEffect(() => {
    if (articleId) {
      dispatch(fetchArticleDetails(articleId));
    }
  }, []);

  const handleReadMore = (id: string) => {
    navigate(`/detail/${id}`);
  };

  const handleBackButton = () => navigate(`/`);

  function getRelatedArticles(articles: IArticle[], selectedArticleId: string) {
    const relatedArticles = articles.slice(0, 3)
    return relatedArticles.filter((article: IArticle) => article.id !== selectedArticleId);
  }

  const renderDetails = useCallback(() => (
    articleDetails ? (
      <div className={style.articlesDetails}>
        <header className={style.header}>
          <h1>{articleDetails.title}</h1>
        </header>
        <div className={style.content}>
          <p className={style.summary}><strong><em>{articleDetails.summary}</em></strong></p>
          <p className={style.fullText}>{articleDetails.fullText}</p>
        </div>
      </div>
    ) : null
  ), [articleDetails])

  const renderRelatedArticles = useCallback(() => {
    const relatedArticles = getRelatedArticles(articles, articleId);
    return (
      <div className={style.articlesWrapper}>
        {relatedArticles.length > 0 ? (
          <>
            <div className={style.relatedItems}>
              <h3>you may also like</h3>
            </div>

            <div className={style.articles}>
              {relatedArticles.map((card) => (
                <Card
                  key={card.id}
                  title={card.title}
                  summary={card.summary}
                  onClick={() => handleReadMore(card.id)}
                />
              ))}
            </div></>
        ) : null}
      </div>
    );
  }, [articles, articleId]);

  return (
    <div>
      <Header title={<Text id="NEWS_DETAILS" />} enableBackButton={true} onBack={handleBackButton} />
      <ArticleSuspense loading={requestInProgress}>
        {renderDetails()}
        {renderRelatedArticles()}
      </ArticleSuspense>
    </div>
  );
}

export default ArticlesDetails;
