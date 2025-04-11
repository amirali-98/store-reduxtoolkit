import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";

import styles from "./styles/ProductCard.module.css";

import CartBtn from "./CartBtn";

export default function ProductCard({ product }) {
  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImage}
        src={product.image}
        alt={product?.title}
      />
      <h2 className={styles.productTitle}>{product?.title}</h2>
      <p className={styles.productPrice}>${product.price}</p>
      <div className={styles.productAction}>
        <Link to={`/products/${product.id}`} className={styles.detailLink}>
          <TbListDetails />
        </Link>
        <CartBtn />
      </div>
    </div>
  );
}
