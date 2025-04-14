import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { fetchProducts } from "../features/productsSlice";

import styles from "./styles/ProductList.module.css";

import ProductCard from "./ProductCard";

import {
  filterByCategory,
  filterBySearch,
  setQueryString,
} from "../utils/helpers";

export default function ProductList({ query }) {
  const { products } = useSelector(store => store.products);
  const [displayedProducts, setDisplayProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    const { search, category } = query;
    setSearchParams(setQueryString(query));
    let filterdProducts = filterBySearch(products, search);
    filterdProducts = filterByCategory(filterdProducts, category);
    setDisplayProducts(filterdProducts);
  }, [query, products]);

  return (
    <div className={styles.container}>
      {displayedProducts.map(product => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
