import React from "react";
import style from "./Header.module.scss";

export interface HeaderProps {
  title?: string | React.ReactNode;
  enableBackButton?: boolean;
  onBack?: () => void;
}

function Header({ title, enableBackButton = false, onBack }: HeaderProps) {
  return (
    <header className={style.header}>
      <>
        {enableBackButton && <a href="#" className={style.backButton} onClick={onBack}>&#8249;</a>}
      </>
      <div className={style.logo}>{title}</div>
    </header>
  )
}
export default Header;
