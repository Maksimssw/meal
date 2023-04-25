import {useContext} from "react";

import CartContext from "../../../store/Cart/cart-context";
import MealItemForm from "./MealItemForm";
import Card from "../../UI/Card";

import styles from "./index.module.css";

const MealItem = (props) => {
  const context = useContext(CartContext)

  const image = require(`../../../static/image/${props.category}/${props.image}`)

  const addToItemHandler = (amount) => {
    context.addItem({
      name: props.name,
      price: props.price,
      id: props.id,
      category: props.category,
      image: props.image,
      amount: amount
    })
  }

  return (
    <Card class={styles.meal}>
      <img
        src={image}
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