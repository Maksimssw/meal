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

  if (action.type === 'TRUE_VALID') {
    return {
      isValid: true,
      items: state.items
    }
  }

  if (action.type === 'FALSE_VALID') {
    return {
      isValid: false,
      items: state.items
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

  const openFavoriteHandler = () => dispatchFavorite({type: 'TRUE_VALID'})

  const closeFavoriteHandler = () => dispatchFavorite({type: 'FALSE_VALID'})

  const favoriteContext = {
    isValid: favorite.isValid,
    items: favorite.items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    openItem: openFavoriteHandler,
    closeItem: closeFavoriteHandler
  }

  return (
    <FavoriteContext.Provider value={favoriteContext}>
      {props.children}
    </FavoriteContext.Provider>
  )
}

export default FavoriteContextProvider