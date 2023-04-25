import {useContext, useRef, useState} from "react";

import Svg from "../../UI/Svg";
import FavoriteContext from "../../../store/Favorite/favorite-context";

import styles from "./index.module.css";

const MealItemFavorite = (props) => {
  const [isActive, setIsActive] = useState(false)
  const favorite = useRef()

  const contextFavorites = useContext(FavoriteContext)

  const addToFavoriteHandler = () => {
    const item = contextFavorites.items.filter((favorite) => favorite.id === props.item.id)

    if (item.length === 0) {
      setIsActive((state) => !state)

      contextFavorites.addItem({
        name: props.item.name,
        price: props.item.price,
        id: props.item.id,
        category: props.item.category,
        image: props.item.image
      })
    } else {
      setIsActive((state) => !state)

      contextFavorites.removeItem(props.item.id)
    }
  }

  return (
    <Svg
      ref={favorite}
      onClick={addToFavoriteHandler}
      class={styles['meal__favorites']}
      action={isActive}
    />
  )
}

export default MealItemFavorite