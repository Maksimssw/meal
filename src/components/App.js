import Header from "./Layout/Header";
import OrderMenu from "./Cart/OrderMenu";
import Meals from "./Meals";
import CartContextProvider from "../store/Cart/CartContextProvider";
import Menu from "./Layout/Menu";

const App = () => {
  return (
    <CartContextProvider>
      <Header />
      <main>
        <Menu />
        <Meals />
        <OrderMenu />
      </main>
    </CartContextProvider>
  );
}

export default App;
