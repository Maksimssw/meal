import Header from "./Layout/Header";
import OrderMenu from "./Cart/OrderMenu";
import Meals from "./Meals";
import CartContextProvider from "../store/Cart/CartContextProvider";

const App = () => {
  return (
    <CartContextProvider>
      <Header />
      <main>
        <OrderMenu />
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
