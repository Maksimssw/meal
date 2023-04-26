import {useContext} from "react";

import FavoriteContext from "../../store/Favorite/favorite-context";
import Banner from "./Banner";
import MealsList from "./MealsList";
import MealsFavorites from "./MealsFavorites";

const Meals = (props) => {
  const contextFavorite = useContext(FavoriteContext)

  return (
    <>
      <Banner />
      <MealsList
        name={props.searchName}
        active={contextFavorite.isValid}
      />
      <MealsFavorites
        name={props.searchName}
        active={contextFavorite.isValid}
      />
    </>
  )
}

export default Meals