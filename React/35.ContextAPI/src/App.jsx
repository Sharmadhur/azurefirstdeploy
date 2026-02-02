import AppName from "./components/AppName";
import AppToDo from "./components/AppToDo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";
import { useState } from "react";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  // ✅ This function will receive data from AppToDo
  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems, 
      {
      id: Date.now(), // ✅ unique id
      name: itemName,
      dueDate: itemDueDate,
    },
  ];

    setTodoItems(newTodoItems);
  };

  // ✅ Delete handler
  const handleDeleteItem = (id) => {
    const newTodoItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(newTodoItems);
  };

  const defaultTodoItems =[{ name:'Buy Ghee', dueDate: 'Today'}];

  return (
    <TodoItemsContext.Provider value={defaultTodoItems}>
      <center className="todo-container">
        <AppName />
        <AppToDo onNewItem={handleNewItem} />
        <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
        <TodoItems
          todoItems={todoItems}
          onDeleteTodo={handleDeleteItem}
        ></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
