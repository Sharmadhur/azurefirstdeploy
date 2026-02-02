
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {

  // let foodItems =["dal", "Hari Sabji", "ROti" , "Salad" , "Milk"];
  let foodItems =[];

  return (
    <>
      <h1>Healthy__Food</h1>
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className ="list-group-item">{item}</li>
        ))}
      </ul>

    </>
  ); 
 
}

export default App
