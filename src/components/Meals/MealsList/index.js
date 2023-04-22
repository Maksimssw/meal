import styles from './index.module.css'
import Card from "../../UI/Card";

import burger from '../../../static/image/burgers/burger.webp'
import Button from "../../UI/Button";

const MEALS = [
  {
    сategory: 'burger',
    name: 'Fish Burger',
    price: '5.59',
    id: Math.random().toString()
  },
  {
    сategory: 'burger',
    name: 'Beef Burger',
    price: '5.59',
    id: Math.random().toString()
  },
  {
    сategory: 'burger',
    name: 'Cheese Burger',
    price: '5.59',
    id: Math.random().toString()
  }
]

const MealsList = () => {
  const mealsList = MEALS.map((meal) => {
    return (
      <Card className={styles.meal} key={meal.id}>
        <img
          src={burger}
          alt=""
        />

        <div className={styles['meal__content']}>
          <div>
            <span className={styles['meal__name']}>{meal.name}</span>
            <span className={styles['meal__price']}>
              <i>$</i>
              {meal.price}
            </span>
          </div>

          <Button className={styles['meal__button']}>+</Button>
        </div>
      </Card>
    )
  })

  return (
    <section className={`${styles.meals} container`}>
      <h2 className={styles['meals__headline']}>Menu Burger</h2>

      <ul className={styles['meals__list']}>
        {mealsList}
      </ul>
    </section>
  )
}

export default MealsList