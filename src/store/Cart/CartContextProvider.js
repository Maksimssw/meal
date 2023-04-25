import CartContext from "./cart-context";
import {useReducer} from "react";

const stateReducer = {
  items: [],
  amountTotal: 0
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updateAmount = state.amountTotal + action.item.price * action.item.amount

    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id
    })

    const existingCartItem = state.items[existingCartItemIndex]

    let updateItem;
    let updateItems;

    if (existingCartItem) {
      updateItem = {
        ...existingCartItem,
        amount: +action.item.amount + +existingCartItem.amount
      }

      updateItems = [...state.items]
      updateItems[existingCartItemIndex] = updateItem
    } else {
      updateItems = state.items.concat(action.item)
    }

    return {
      items: updateItems,
      amountTotal: updateAmount
    }
  }

  if (action.type === 'REMOVE_ITEM') {
    const existingCartItemIndex = state.items.findIndex(item => {
      return item.id === action.id
    })

    const existingCartItem = state.items[existingCartItemIndex]

    const updateAmount = state.amountTotal - existingCartItem.price
    let updateItems;

    if (+existingCartItem.amount === 1) {
      updateItems = state.items.filter(item => item.id !== action.id)
    } else {
      const updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1
      }

      updateItems = [...state.items]
      updateItems[existingCartItemIndex] = updateItem
    }

    return {
      items: updateItems,
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

  const removeItemHandler = (id) => {
    dispatchCart({
      type: 'REMOVE_ITEM',
      id: id
    })
  }

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
