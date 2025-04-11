import Category from "../components/Category";
import ProductList from "../components/ProductList";
import SearchForm from "../components/SearchForm";

import { useTitle } from "../utils/hooks";

export default function Home() {
  useTitle("Online Shop");
  return (
    <>
      <SearchForm />
      <Category />
      <ProductList />
    </>
  );
}
