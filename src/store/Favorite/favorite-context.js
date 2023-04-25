import {createContext} from "react";

const FavoriteContext = createContext({
  isValid: false,
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
})

export default FavoriteContext