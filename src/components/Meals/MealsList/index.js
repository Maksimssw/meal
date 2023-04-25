import MealItem from "../MealItem";

import styles from './index.module.css'
import {useEffect, useState} from "react";

const MEALS = [
  {
    category: 'burgers',
    name: 'Fish Burger',
    price: '5.59',
    id: Math.random().toString(),
    image: 'burger.webp'
  },
  {
    category: 'burgers',
    name: 'Beef Burger',
    price: '5.59',
    id: Math.random().toString(),
    image: 'burger2.webp'
  },
  {
    category: 'burgers',
    name: 'Cheese Burger',
    price: '5.59',
    id: Math.random().toString(),
    image: 'burger3.webp'
  }
]

const MealsList = (props) => {
  const [searchName, setSearchName] = useState('')

  useEffect(() => {
    setSearchName(props.name)
  }, [props.name])

  const mealsList = MEALS
    .filter((meal) => {
      console.log(searchName)
      if (searchName === '') return meal
      return searchName === meal.name
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
    <section className={`${styles.meals} container`}>
      <h2 className={styles['meals__headline']}>Menu Burger</h2>

      <ul className={styles['meals__list']}>
        {mealsList}
      </ul>
    </section>
  )
}

export default MealsList