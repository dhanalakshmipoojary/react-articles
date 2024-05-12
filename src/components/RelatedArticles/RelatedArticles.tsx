import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { IArticle } from '../../_types/actionType';
import { useNavigate } from 'react-router-dom';
import { Card, Text } from "../../components";
import style from "./RelatedArticles.module.scss";

export interface RelatedArticlesProps {
  selectedArticleId: string
};

function RelatedArticles({ selectedArticleId }: RelatedArticlesProps) {
  const navigate = useNavigate();
  const { articles = [] } = useSelector((state: RootState) => state.articles);

  const handleReadMore = (id: string) => {
    navigate(`/detail/${id}`);
  };

  const relatedArticles = useMemo(() => {
    return articles.filter((article: IArticle) => article.id !== selectedArticleId).slice(0, 3);
  }, [articles, selectedArticleId]);

  return (
    relatedArticles.length === 0 ? null : (
      <div className={style.articlesWrapper}>
        <>
          <div className={style.relatedItems}>
            <h3>
              <Text id="RELATED_NEWS" />
            </h3>
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
          </div>
        </>
      </div>
    )
  );
}

export default RelatedArticles;