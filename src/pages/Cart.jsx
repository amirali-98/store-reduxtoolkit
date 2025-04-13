import { useSelector } from "react-redux";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmarkSharp } from "react-icons/io5";

import styles from "./styles/Cart.module.css";
import CartBtn from "../components/CartBtn";

export default function Cart() {
  const cart = useSelector(store => store.cart);

  return (
    <div className={styles.container}>
      <ul className={styles.info}>
        <li>
          <span className={styles.infoIcon}>
            <MdProductionQuantityLimits />
          </span>
          <span>{cart.totalItems}</span>
        </li>
        <li>
          <span className={styles.infoIcon}>
            <FaDollarSign />
          </span>
          <span>{cart.totalCost.toFixed(2)}</span>
        </li>
        <li>
          <span className={styles.infoIcon}>
            {cart.isPending ? <IoCheckmarkSharp /> : <RxCross2 />}
          </span>
          <span>{cart.isPending ? "Is Pending..." : "Not Pending"}</span>
        </li>
      </ul>
      {!!cart.totalItems && (
        <div className={styles.items}>
          {cart.items.map(item => (
            <div className={styles.item} key={item.id}>
              <img src={item.image} alt={item.title} />
              <p className={styles.description}>{item.title}</p>
              <CartBtn product={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
