import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../features/productsSlice";

import styles from "./styles/ProductList.module.css";

import ProductCard from "./ProductCard";

export default function ProductList() {
  const products = useSelector(store => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className={styles.container}>
      {products.products.map(product => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
