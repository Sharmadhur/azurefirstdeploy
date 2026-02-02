import AppName from "./components/AppName";
import AppToDo from "./components/AppToDo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  // ✅ This function will receive data from AppToDo
  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = {
      id: Date.now(), // ✅ unique id
      name: todoName,
      dueDate: dueDate,
    };

    setTodoItems(newTodoItems);
  };

  // ✅ Delete handler
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AppToDo onNewItem={handleNewItem} />
      <TodoItems
        todoItems={todoItems}
        onDeleteTodo={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
