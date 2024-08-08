'use client';
import searchSelectStyles from "@/css/searchSelect.module.css";
import { useState } from "react";

interface SearchProps {
  onSearchSubmit: (query: string) => void;
}

export const Search: React.FC<SearchProps> = ({ onSearchSubmit }) => {
  const [query, setQuery] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearchSubmit(query);
  };

  const handleButtonClick = () => {
    onSearchSubmit(query);
  };

	return (
    <form onSubmit={handleSubmit} className={searchSelectStyles.searchBox}>
      <button
        type="submit"
        className={searchSelectStyles.searchBtn}
        onClick={handleButtonClick}
      ></button>
      <input
        type="text"
        placeholder="Search for a country..."
        className={searchSelectStyles.searchInput}
        value={query}
        onChange={handleChange}
      />
    </form>
  );
}