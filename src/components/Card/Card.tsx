import React from "react";
import style from "./Card.module.scss";
import ReadMoreButton from "../ReadMoreButton/ReadMoreButton";

export interface CardProps {
  title?: string | React.ReactNode;
  onClick?: any;
  summary: string;
}

function Card({ title, summary, onClick }: CardProps) {
  return (
    <div className={style.card}>
      <h2 className={style.cardTitle}>{title}</h2>
      <div className={style.borderBotton}></div>
      <p className={style.cardDescription}>{summary}</p>
      <ReadMoreButton onClick={onClick} />
    </div>
  );
}

export default Card;
