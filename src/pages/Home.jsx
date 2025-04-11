import Category from "../components/Category";
import ProductList from "../components/ProductList";
import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <>
      <SearchForm />
      <Category />
      <ProductList />
    </>
  );
}
