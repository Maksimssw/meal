import CartContextProvider from "./Cart/CartContextProvider";
import FavoriteContextProvider from "./Favorite/FavoriteContextProvider";

const Context = (props) => {
  return (
    <CartContextProvider>
      <FavoriteContextProvider>
        {props.children}
      </FavoriteContextProvider>
    </CartContextProvider>
  )
}

export default Context