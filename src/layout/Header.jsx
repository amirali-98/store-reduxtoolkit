import { BsCart } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./styles/Header.module.css";

export default function Header() {
  const cart = useSelector(store => store.cart);
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <Link to="/">
        <h3 className={styles.headerTitle}>Online Shop</h3>
      </Link>
      <button className={styles.cartBtn} onClick={() => navigate("/cart")}>
        {cart.totalItems > 0 && (
          <span className={styles.cartCount}>{cart.totalItems}</span>
        )}
        <BsCart />
      </button>
    </header>
  );
}
