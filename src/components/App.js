import Header from "./Layout/Header";
import OrderMenu from "./Cart/OrderMenu";
import Meals from "./Meals";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <OrderMenu />
        <Meals />
      </main>
    </>
  );
}

export default App;
