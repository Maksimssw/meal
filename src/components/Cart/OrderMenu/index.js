import styles from './index.module.css'

import pizza from '../../../static/image/pizza.webp'
import Button from "../../UI/Button";

const OrderMenu = () => {
  return (
    <aside className={styles['order-menu']}>
      <h2 className={styles['order-menu__headline']}>Order Menu</h2>

      <ul className={styles['order-menu__list']}>
        <li className={`${styles['order-menu__item']} grid-row`}>
          <img
            src={pizza}
            alt=""
          />

          <div className={styles['order-menu__content']}>
            <span className={styles['order-menu__name']}>Pepperoni Pizza</span>
            <span className={styles['order-menu__count']}>x1</span>
          </div>

          <span className={styles['order-menu__price']}>
            +
            <i>$</i>
            5.59
          </span>
        </li>
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
          <i>$</i>202.00
        </span>
      </div>

      <Button className={styles['order-menu__button']}>Checkout</Button>
    </aside>
  )
}

export default OrderMenu

