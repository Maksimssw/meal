import FavoriteContext from "./favorite-context";
import {useReducer} from "react";

const stateReducer = {
  isValid: false,
  items: [],
}

const favoriteReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updateItems = state.items.concat(action.item)

    return {
      isValid: state.isValid,
      items: updateItems,
    }
  }

  if (action.type === 'REMOVE_ITEM') {
    const updateItems = state.items.filter((item) => {
      return item.id !== action.id
    })

    return {
      isValid: state.isValid,
      items: updateItems
    }
  }

  return stateReducer
}

const FavoriteContextProvider = (props) => {
  const [favorite, dispatchFavorite] = useReducer(
    favoriteReducer,
    stateReducer
  )
  const addItemHandler = (item) => {
    dispatchFavorite({
      type: 'ADD_ITEM',
      item: item
    })
  }

  const removeItemHandler = (id) => {
    dispatchFavorite({
      type: 'REMOVE_ITEM',
      id: id
    })
  }

  const favoriteContext = {
    isValid: favorite.isValid,
    items: favorite.items,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  }

  return (
    <FavoriteContext.Provider value={favoriteContext}>
      {props.children}
    </FavoriteContext.Provider>
  )
}

export default FavoriteContextProvider