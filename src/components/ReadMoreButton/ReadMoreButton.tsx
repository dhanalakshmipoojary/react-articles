import React from "react";
import cn from "classnames";

import style from "./ReadMoreButton.module.scss";

export interface CardProps {
  onClick?: () => void;
}

function ReadMoreButton({ onClick }: CardProps) {
  return (
    <button onClick={onClick} className={style.readMore}>
      Read more
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        className={style.icon}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg> */}
    </button>
  );
}

export default ReadMoreButton;
