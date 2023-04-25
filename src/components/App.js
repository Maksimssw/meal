import Header from "./Layout/Header";
import OrderMenu from "./Cart/OrderMenu";
import Meals from "./Meals";
import CartContextProvider from "../store/Cart/CartContextProvider";
import Menu from "./Layout/Menu";
import {useState} from "react";

const App = () => {
  const [searchName, setSearchName] = useState('')

  const addSearchHandler = (name) => setSearchName(name)

  return (
    <CartContextProvider>
      <Header onAddSearch={addSearchHandler}/>
      <main>
        <Menu />
        <Meals searchName={searchName}/>
        <OrderMenu />
      </main>
    </CartContextProvider>
  );
}

export default App;
