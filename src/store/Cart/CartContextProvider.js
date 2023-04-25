import CartContext from "./cart-context";
import {useReducer} from "react";

const stateReducer = {
  items: [],
  amountTotal: 0
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updateItem = state.items.concat(action.item)
    const updateAmount = state.amountTotal + action.item.price * action.item.amount

    return {
      items: updateItem,
      amountTotal: updateAmount
    }
  }

  return stateReducer
}

const CartContextProvider = (props) => {
  const [cart, dispatchCart] = useReducer(
    cartReducer,
    stateReducer
  )

  const addItemHandler = (item) => {
    dispatchCart({
      type: 'ADD_ITEM',
      item: item
    })
  }

  const removeItemHandler = () => {}

  const cartContext = {
    items: cart.items,
    count: cart.amountTotal,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
