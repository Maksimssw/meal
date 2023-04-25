import {useContext} from "react";
import CartContext from "../../../store/Cart/cart-context";
import Button from "../../UI/Button";
import CartItem from "../CartItem";

import styles from './index.module.css'

const OrderMenu = () => {
  const context = useContext(CartContext)

  const amountTotal = +context.count.toFixed(2) + 1

  const addToItemHandler = (item) => {
    context.addItem({
      ...item,
      amount: 1
    })
  }

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

      <Button class={styles['order-menu__button']}>Checkout</Button>
    </aside>
  )
}

export default OrderMenu

