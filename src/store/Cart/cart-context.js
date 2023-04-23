import react from 'react'

const CartContext = react.createContext({
  items: [],
  count: 0,
  addItem: (item) => {},
  remove: (id) => {}
})

export default CartContext