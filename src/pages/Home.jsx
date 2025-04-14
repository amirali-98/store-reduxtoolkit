import { useState } from "react";

import Category from "../components/Category";
import ProductList from "../components/ProductList";
import SearchForm from "../components/SearchForm";

import { useTitle } from "../utils/hooks";

export default function Home() {
  const [query, setQuery] = useState({});
  useTitle("Online Shop");
  return (
    <>
      <SearchForm setQuery={setQuery} />
      <Category setQuery={setQuery} />
      <ProductList query={query} />
    </>
  );
}
