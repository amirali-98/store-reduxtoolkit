import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../features/productsSlice";

import styles from "./styles/ProductList.module.css";

import ProductCard from "./ProductCard";

import { filterByCategory, filterBySearch } from "../utils/helpers";

export default function ProductList({ query }) {
  const { products } = useSelector(store => store.products);
  const [displayedProducts, setDisplayProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    const { search, category } = query;
    let filterdProducts = filterBySearch(products, search);
    filterdProducts = filterByCategory(filterdProducts, category);
    setDisplayProducts(filterdProducts);
  }, [query]);

  return (
    <div className={styles.container}>
      {displayedProducts.map(product => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
