import Card from "../../UI/Card";
import Button from "../../UI/Button";

import burger from "../../../static/image/burgers/burger.webp";
import styles from "./index.module.css";

const MealItem = (props) => {
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

        <Button className={styles['meal__button']}>+</Button>
      </div>
    </Card>
  )
}

export default MealItem