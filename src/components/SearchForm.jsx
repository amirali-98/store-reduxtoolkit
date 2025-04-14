import { useState } from "react";
import { FiSearch } from "react-icons/fi";

import styles from "./styles/SearchForm.module.css";

export default function SearchForm({ setQuery }) {
  const [search, setSearch] = useState("");

  function searchHandler(e) {
    e.preventDefault();
    setQuery(query => ({ ...query, search }));
  }

  return (
    <form className={styles.searchForm} onSubmit={searchHandler}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button className={styles.searchBtn} type="submit">
        <FiSearch />
      </button>
    </form>
  );
}
