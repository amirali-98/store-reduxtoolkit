import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";

import styles from "./styles/Header.module.css";

export default function Header() {
  const cart = useSelector(store => store.cart);
  return (
    <header className={styles.header}>
      <h3 className={styles.headerTitle}>Online Shop</h3>
      <button className={styles.cartBtn}>
        {cart.totalItems > 0 && (
          <span className={styles.cartCount}>{cart.totalItems}</span>
        )}
        <BsCart />
      </button>
    </header>
  );
}
