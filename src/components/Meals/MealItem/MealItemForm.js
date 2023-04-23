import Button from "../../UI/Button";
import Input from "../../UI/Input";

import styles from "./index.module.css";
const MealItemForm = () => {
  return (
    <form className={`${styles['meal__form']} grid-row`}>
      <Input
        text='Кол'
        class={styles['meal__label']}
        input={{
          type: 'number',
          min: 1,
          step: 1,
          defaultValue: 1
        }}
      />

      <Button class={styles['meal__button']}>+</Button>
    </form>
  )
}

export default MealItemForm