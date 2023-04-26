import MealItem from "../MealItem";

import MEALS from "../../../static/data/data";
import styles from './index.module.css'


const MealsList = (props) => {
  const mealsList = MEALS
    .filter((meal) => {
      if (props.name === '') return meal
      return props.name === meal.name
    })
    .map((meal) => {
      return (
        <MealItem
          key={meal.id}
          id={meal.id}
          name={meal.name}
          price={meal.price}
          category={meal.category}
          image={meal.image}
        />
      )
    })

  return (
    <section
      className={`
        ${styles.meals} 
        ${props.active ? styles['meals_hidden'] : ''}
        container
      `}
    >
      <h2 className={styles['meals__headline']}>Menu Burger</h2>

      <ul className={styles['meals__list']}>
        {mealsList}
      </ul>
    </section>
  )
}

export default MealsList