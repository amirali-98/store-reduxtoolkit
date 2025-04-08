import { BsCart } from "react-icons/bs";

import styles from "./styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h3 className={styles.headerTitle}>Online Shop</h3>
      <button className={styles.cartBtn}>
        {/* <span className={styles.cartCount}>2</span> */}
        <BsCart />
      </button>
    </header>
  );
}
