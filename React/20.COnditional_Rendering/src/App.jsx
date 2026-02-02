import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems =["dal", "Hari Sabji", "ROti" , "Salad" , "Milk"];
  //let foodItems = [];

  // 1. If-else 
  // if( foodItems.length === 0 ){
  //   return <h3>I am still hungry.</h3>
  // }

  // 2. Ternary
  // let emptyMessage =
  //   foodItems.length === 0 ? <h3>I am still Hungry.</h3> : null; 

  return (
    <>
      <h1>Healthy__Food</h1>
      {/* {emptyMessage} */}
  {/* 3. Logical Operator */}
  {foodItems.length === 0 && <h3>I am still hungry.</h3>}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
