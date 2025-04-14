import { useState, useEffect } from "react";

import styles from "./styles/Category.module.css";

import CATEGORIES from "../constants/Categories";

export default function Category({ setQuery }) {
  const [category, setCategory] = useState("all");
  useEffect(() => {
    setQuery(query => ({ ...query, category }));
  }, [category]);
  return (
    <div className={styles.categories}>
      {CATEGORIES.map(c => (
        <span
          key={c.id}
          className={`${styles.categoryItem} ${
            category === c.title.toLocaleLowerCase() ? styles.active : undefined
          }`}
          onClick={() => setCategory(c.title.toLocaleLowerCase())}
        >
          {c.title}
        </span>
      ))}
    </div>
  );
}
