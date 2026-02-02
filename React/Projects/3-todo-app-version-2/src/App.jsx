import AppName from "./components/AppName";
import AppToDo from "./components/AppToDo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {

  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Like This Video",
      dueDate: "Right Now",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AppToDo />
      <TodoItems todoItems={todoItems}></TodoItems>
      
    </center>
  );
}

export default App;


// 2:50:55