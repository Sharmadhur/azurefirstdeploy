import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./Components/FoodItem";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {


  let [foodItems, setFoodItems] = useState([]);



  const onKeyDown = (event) => {
    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }

  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy__Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      
    </>
  );
}

export default App;
