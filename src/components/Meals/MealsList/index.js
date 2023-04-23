import MealItem from "../MealItem";

import styles from './index.module.css'

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
      <MealItem
        key={meal.id}
        name={meal.name}
        price={meal.price}
      />
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