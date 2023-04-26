import styles from "../MealsList/index.module.css";
import MealItem from "../MealItem";
import {useContext} from "react";
import FavoriteContext from "../../../store/Favorite/favorite-context";

const MealsFavorites = (props) => {
  const contextFavorite = useContext(FavoriteContext)

  const mealsList = contextFavorite.items
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
          isValid={true}
        />
      )
    })

  return (
    <section
      className={`
        ${styles.meals} 
        ${props.active ? '' : styles['meals_hidden']}
        container
      `}
    >
      <h2 className={styles['meals__headline']}>Favorites</h2>

      <ul className={styles['meals__list']}>
        {mealsList}
      </ul>
    </section>
  )
}

export default MealsFavorites