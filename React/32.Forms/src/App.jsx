import AppName from "./components/AppName";
import AppToDo from "./components/AppToDo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  // ✅ This function will receive data from AppToDo
  const handleAppTodo = (todoName, dueDate) => {
    const newTodo = {
      id: Date.now(), // ✅ unique id
      name: todoName,
      dueDate: dueDate,
    };

    setTodoItems([...todoItems, newTodo]);
  };

  // ✅ Delete handler
  const handleDeleteTodo = (id) => {
    const updatedTodos = todoItems.filter(item => item.id !== id);
    setTodoItems(updatedTodos);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AppToDo onAddTodo={handleAppTodo} />
      <TodoItems 
      todoItems={todoItems}
      onDeleteTodo={handleDeleteTodo} ></TodoItems>
    </center>
  );
}

export default App;
