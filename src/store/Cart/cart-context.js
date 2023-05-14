import react from 'react'

const CartContext = react.createContext({
  items: [],
  count: 0,
  addItem: (item) => {},
  allRemove: () => {},
  removeItem: (id) => {}
})

export default CartContext