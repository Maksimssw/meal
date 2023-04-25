import {useRef, useState} from "react";

import Button from "../../UI/Button";
import Input from "../../UI/Input";

import styles from "./index.module.css";

const MealItemForm = (props) => {
  const [amountValid, setAmountValid] = useState(true)
  const amountRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()
    setAmountValid(true)

    const amount = amountRef.current.value
    if (amount.trim().length === 0 || +amount < 1 || +amount > 99) {
      setAmountValid(false)
      return
    }

    props.onAddToItem(amount)
  }

  return (
    <form
      className={`${styles['meal__form']} grid-row`}
      onSubmit={submitHandler}
    >
      <Input
        ref={amountRef}
        text='Кол'
        class={styles['meal__label']}
        classInput={amountValid ? '' : styles['meal__label_error']}
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