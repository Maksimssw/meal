import Header from "./Layout/Header";
import OrderMenu from "./Cart/OrderMenu";
import Meals from "./Meals";
import Menu from "./Layout/Menu";
import {useState} from "react";
import Context from "../store";

const App = () => {
  const [searchName, setSearchName] = useState('')

  const addSearchHandler = (name) => setSearchName(name)

  return (
    <Context>
      <Header onAddSearch={addSearchHandler}/>
      <main>
        <Menu />
        <Meals searchName={searchName}/>
        <OrderMenu />
      </main>
    </Context>
  );
}

export default App;
