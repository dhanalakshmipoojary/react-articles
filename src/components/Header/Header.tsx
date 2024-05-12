import React from "react";
import style from "./Header.module.scss";

export interface HeaderProps {
  title?: string | React.ReactNode;
}

function Header({ title }: HeaderProps) {
  // return <label className={style.header}>{title}</label>;
  return (
    <header className={style.header}>
      {/* <h1 className={style.headerTitle}>Latest News</h1>
    <p className={style.headerDescription}>Stay updated with the latest news articles</p> */}
      <div className={style.logo}>{title}</div>
      <div className={style.searchBox}>
        <input type="text" placeholder="Search articles..." className={style.searchInput} />
        <button className={style.searchBtn}>Search</button>
      </div>
    </header>
  )
}
export default Header;
