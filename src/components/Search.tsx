'use client';
import styles from "@/css/searchSelect.module.css";
import { useState } from "react";

interface SearchProps {
  onSearchSubmit: (query: string) => void;
}

export const Search: React.FC<SearchProps> = ({ onSearchSubmit }) => {
  const [query, setQuery] = useState<string>('');

  //入力内容が変更された時
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  //検索が送信された時（Enter）
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearchSubmit(query);
  };

  //ボタンクリックされた時
  const handleButtonClick = () => {
    onSearchSubmit(query);
  };

	return (
    <form onSubmit={handleSubmit} className={styles.searchBox}>
      <button
        type="submit"
        className={styles.searchBtn}
        onClick={handleButtonClick}
      ></button>
      <input
        type="text"
        placeholder="Search for a country..."
        className={styles.searchInput}
        value={query}
        onChange={handleChange}
      />
    </form>
  );
}