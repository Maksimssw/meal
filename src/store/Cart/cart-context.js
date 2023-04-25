import react from 'react'

const CartContext = react.createContext({
  items: [],
  count: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
})

export default CartContext