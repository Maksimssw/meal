import MealItem from "../MealItem";

import styles from './index.module.css'
import {useEffect, useState} from "react";
import server from "../../../server/server";


const MealsList = (props) => {
  const {loading, error, requestMeals} = server()
  const [meals, setMeals] = useState([])

  useEffect(() => {
    getMeals()
  }, [])

  const getMeals = () => {
    requestMeals().then((data) => setMeals(data))
  }

  const mealsList = meals.length > 0 ? meals
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
    }) : ''

  const loader = loading && !error ?  <p>Загрузка...</p> : ''
  const mistake = !loading && error ? <p>Ошибка!</p> : ''

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
        {loader}
        {mistake}
      </ul>
    </section>
  )
}

export default MealsList