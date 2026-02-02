import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./Components/FoodItem";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";

function App() {
  let foodItems = ["Paneer", "Hari Sabji", "ROti", "Salad", "Milk"];

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy__Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      <Container>
        <p>
          Above is the list of healthy foods that are good for your health and well being.
        </p>
      </Container>
    </>
  );
}

export default App;
