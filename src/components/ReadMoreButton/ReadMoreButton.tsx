import React from "react";
import style from "./ReadMoreButton.module.scss";

export interface CardProps {
  onClick?: () => void;
}

function ReadMoreButton({ onClick }: CardProps) {
  return (
    <button onClick={onClick} className={style.readMore}>
      Read more
    </button>
  );
}

export default ReadMoreButton;
