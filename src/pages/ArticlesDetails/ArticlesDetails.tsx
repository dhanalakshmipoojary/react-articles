import React, { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticleDetails } from "../../store/action";
import { RootState, AppDispatch } from "../../store/store";
import { Header, Text, RelatedArticles } from "../../components";
import style from "./ArticlesDetails.module.scss";
import ArticleSuspense from "../../components/ArticleSuspense/ArticleSuspense";


function ArticlesDetails() {
  const navigate = useNavigate();
  const { articleId = "" } = useParams();

  const dispatch = useDispatch<AppDispatch>();

  const { selectedArticle: articleDetails, loadingDetails: requestInProgress } = useSelector((state: RootState) => state.articles);

  useEffect(() => {
    if (articleId) {
      dispatch(fetchArticleDetails(articleId));
    }
  }, []);


  const handleBackButton = () => navigate(`/`);



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



  return (
    <div>
      <Header title={<Text id="NEWS_DETAILS" />} enableBackButton={true} onBack={handleBackButton} />
      <ArticleSuspense loading={requestInProgress}>
        {renderDetails()}
        <RelatedArticles selectedArticleId={articleId} />
      </ArticleSuspense>
    </div>
  );
}

export default ArticlesDetails;
