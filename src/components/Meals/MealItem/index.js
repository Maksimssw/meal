import {useContext} from "react";

import MealItemForm from "./MealItemForm";
import Card from "../../UI/Card";

import burger from "../../../static/image/burgers/burger.webp";
import styles from "./index.module.css";
import CartContext from "../../../store/Cart/cart-context";

const MealItem = (props) => {
  const context = useContext(CartContext)

  const addToItemHandler = (amount) => {
    context.addItem({
      name: props.name,
      price: props.price,
      id: props.id,
      amount: amount
    })
  }

  return (
    <Card class={styles.meal}>
      <img
        src={burger}
        alt=""
      />

      <div className={styles['meal__content']}>
        <div>
          <h3 className={styles['meal__name']}>{props.name}</h3>
          <span className={styles['meal__price']}>
              <i>$</i>{props.price}
            </span>
        </div>

        <MealItemForm onAddToItem={addToItemHandler} />
      </div>
    </Card>
  )
}

export default MealItem