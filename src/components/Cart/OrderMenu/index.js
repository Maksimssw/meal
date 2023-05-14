import {useContext, useState} from "react";
import CartContext from "../../../store/Cart/cart-context";
import Button from "../../UI/Button";
import CartItem from "../CartItem";
import SubmitButton from "./SubmitButton";

import styles from './index.module.css'
import server from "../../../server/server";

const OrderMenu = () => {
  const context = useContext(CartContext)
  const [submitIsValid, setSubmitIsValid] = useState(false)

  const amountTotal = +context.count.toFixed(2) + 1

  const addToItemHandler = (item) => {
    context.addItem({
      ...item,
      amount: 1
    })
  }

  const {loading, error, sendOrder} = server()

  const submitIsValidHandler = () => setSubmitIsValid(false)
  const addSubmitHandler = () => setSubmitIsValid(true)

  const removeToItemHandler = (id) => {
    context.removeItem(id)
  }

  const cartItems = context.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        image={item.image}
        category={item.category}
        onAddToItem={addToItemHandler.bind(null, item)}
        onRemoveToItem={removeToItemHandler.bind(null, item.id)}
      />
    )
  })

  const submitOrder = (user) => {
    sendOrder(user, context.items)
    context.allRemove()
  }

  return (
    <aside
      className={`
        ${styles['order-menu']}
        ${context.items.length > 0 ? styles['order-menu_active'] : ''}
      `}
    >
      <h2 className={styles['order-menu__headline']}>Order Menu</h2>
      <span className={styles['order-menu__quantity']}>in total {context.items.length}</span>

      <ul className={styles['order-menu__list']}>
        {cartItems}
      </ul>

      <div
        className='grid-row justify-content-between'
      >
        <p className={styles['order-menu__service']}>Service</p>

        <span className={styles['order-menu__price']}>
          +<i>$</i>1.00
        </span>
      </div>
      
      <div className={`${styles['order-menu__result']} grid-row justify-content-between`}>
        <span className={styles['order-menu__total']}>Total</span>

        <span className={styles['order-menu__price']}>
          <i>$</i>{amountTotal}
        </span>
      </div>

      {!submitIsValid &&
        <Button
          class={styles['order-menu__button']}
          onClick={addSubmitHandler}
        >
          Checkout
        </Button>
      }

      {submitIsValid &&
        <SubmitButton
          onSubmitOrder={submitOrder}
          onSubmitIsValid={submitIsValidHandler}
        />
      }
      {loading ? <p>Загрузка</p> : ''}
      {error ? <p>Ошибка</p> : ''}
    </aside>
  )
}

export default OrderMenu

