import styles from "./index.module.css";
import pizza from "../../../static/image/pizza.webp";
import Button from "../../UI/Button";

const CartItem = (props) => {
  const amountTotal = (props.price * props.amount).toFixed(2)

  return (
    <li className={`${styles.cart} grid-row`}>
      <img
        src={pizza}
        alt=""
      />

      <div className={styles['cart__content']}>
        <span className={styles['cart__name']}>{props.name}</span>
        <span className={styles['cart__count']}>x{props.amount}</span>
      </div>

      <div className={styles['cart__container']}>
        <span className={styles['cart__price']}>
          +<i>$</i>{amountTotal}
        </span>

        <div className={styles['cart__buttons']}>
          <Button
            class={styles['cart__button']}
            onClick={props.onRemoveToItem}
          >
            -
          </Button>

          <Button
            class={styles['cart__button']}
            onClick={props.onAddToItem}
          >
            +
          </Button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
