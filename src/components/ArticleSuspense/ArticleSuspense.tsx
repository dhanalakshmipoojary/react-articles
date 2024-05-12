import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Text, Loader } from "../../components";
import style from "./ArticleSuspense.module.scss";

export interface ArticleSuspenseProps {
  loading: boolean,
  children: React.ReactNode | null
};

function ArticleSuspense(props: ArticleSuspenseProps) {
  const error = useSelector((state: RootState) => state.articles.error);

  const renderLoader = useCallback(() => props.loading ? <Loader /> : null, [props.loading]);
  const renderError = useCallback(() => error ? <div className={style.error}><Text id="DATA_FETCH_ERROR" /></div> : null, [error]);

  return (
    <>
      {renderLoader() || renderError() || props.children}
    </>
  );
}

export default ArticleSuspense;
