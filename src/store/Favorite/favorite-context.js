import {createContext} from "react";

const FavoriteContext = createContext({
  isValid: false,
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  openItem: () => {},
  closeItem: () => {}
})

export default FavoriteContext