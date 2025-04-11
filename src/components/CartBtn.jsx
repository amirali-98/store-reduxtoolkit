import { useState } from "react";
import { TbShoppingCartPlus, TbTrash } from "react-icons/tb";

import styles from "./styles/CartBtn.module.css";

export default function CartBtn() {
  const [quantity, setQuantity] = useState(0);

  function addHandler() {
    setQuantity(quantity => quantity + 1);
  }

  function removeHandler() {
    setQuantity(quantity => quantity - 1);
  }

  return (
    <div className={styles.container}>
      {quantity > 0 && (
        <>
          <button className={styles.cartBtn} onClick={removeHandler}>
            {quantity > 1 ? "-" : <TbTrash />}
          </button>
          <p>{quantity}</p>
        </>
      )}
      <button className={styles.cartBtn} onClick={addHandler}>
        {quantity > 0 ? "+" : <TbShoppingCartPlus />}
      </button>
    </div>
  );
}
