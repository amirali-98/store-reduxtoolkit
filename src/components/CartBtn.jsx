import { useSelector, useDispatch } from "react-redux";
import { TbShoppingCartPlus, TbTrash } from "react-icons/tb";

import styles from "./styles/CartBtn.module.css";

import { add, remove } from "../features/cartSlice";

import { calculateQuantity } from "../utils/helpers";

export default function CartBtn({ product }) {
  const cart = useSelector(store => store.cart);
  const dispatch = useDispatch();

  function addHandler() {
    dispatch(add(product));
  }

  function removeHandler() {
    dispatch(remove(product));
  }

  return (
    <div className={styles.container}>
      {calculateQuantity(cart.items, product.id) > 0 && (
        <>
          <button className={styles.cartBtn} onClick={removeHandler}>
            {calculateQuantity(cart.items, product.id) > 1 ? "-" : <TbTrash />}
          </button>
          <p>{calculateQuantity(cart.items, product.id)}</p>
        </>
      )}
      <button className={styles.cartBtn} onClick={addHandler}>
        {calculateQuantity(cart.items, product.id) > 0 ? (
          "+"
        ) : (
          <TbShoppingCartPlus />
        )}
      </button>
    </div>
  );
}
