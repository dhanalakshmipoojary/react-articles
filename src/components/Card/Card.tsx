import React from "react";
import style from "./Card.module.scss";
import ReadMoreButton from "../ReadMoreButton/ReadMoreButton";

export interface CardProps {
  title?: string | React.ReactNode;
  onClick?:any;
  summary: string;
}

function Card({ title, summary, onClick }: CardProps) {
  return (
    <div className={style.cardWrapper}>
        <div className={style.cardBody}>
          <h2>{title}</h2>
          <p>{summary}</p>
          <ReadMoreButton onClick={onClick} />
        </div>
    </div>
  );
}

export default Card;
