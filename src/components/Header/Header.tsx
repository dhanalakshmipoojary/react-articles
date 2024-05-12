import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";

export interface HeaderProps {
  title?: string | React.ReactNode;
  enableBackButton?: boolean;
}

function Header({ title, enableBackButton = false }: HeaderProps) {
  return (
    <header className={style.header}>
      <>
        {enableBackButton && <Link className={style.backButton} to='/'>&#8249;</Link>}
      </>
      <div className={style.logo}>{title}</div>
    </header>
  )
}
export default Header;
