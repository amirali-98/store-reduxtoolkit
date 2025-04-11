import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ImPriceTags } from "react-icons/im";
import { BiCategory } from "react-icons/bi";
import { IoArrowBack } from "react-icons/io5";

import styles from "./styles/ProductDetail.module.css";

export default function ProductDetail() {
  const { productId } = useParams();
  const product = useSelector(store =>
    store.products.products.find(p => p.id === +productId)
  );

  return (
    <div className={styles.container}>
      <img
        className={styles.productImage}
        src={product.image}
        alt={product.title}
      />
      <div>
        <h1 className={styles.productTitle}>{product.title}</h1>
        <p className={styles.productDesc}>{product.description}</p>
        <ul className={styles.productInfo}>
          <li>
            <span className={styles.productInfoIcon}>
              <ImPriceTags />
            </span>
            <span className={styles.productInfoValue}>${product.price}</span>
          </li>
          <li>
            <span className={styles.productInfoIcon}>
              <BiCategory />
            </span>
            <span className={styles.productInfoValue}>${product.category}</span>
          </li>
        </ul>
        <Link to="/" className={styles.productBackLink}>
          <IoArrowBack />
          Back to Store
        </Link>
      </div>
    </div>
  );
}
