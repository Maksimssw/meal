import Banner from "./Banner";
import MealsList from "./MealsList";

const Meals = (props) => {
  return (
    <>
      <Banner />
      <MealsList name={props.searchName}/>
    </>
  )
}

export default Meals