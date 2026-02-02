import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./Components/FoodItem";
import ErrorMessage from "./Components/ErrorMessage";

function App() {
  let foodItems = ["Paneer", "Hari Sabji", "ROti", "Salad", "Milk"];


  return (
    <>
      <h1>Healthy__Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
