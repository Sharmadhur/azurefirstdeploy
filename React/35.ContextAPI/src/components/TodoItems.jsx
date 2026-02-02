import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
useContext
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({onDeleteTodo}) =>{

  const todoItems = useContext(TodoItemsContext);
  return (
    <div className={styles["items-container"]}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          todoDate={item.dueDate}
          todoName={item.name}
          onDelete={() => onDeleteTodo(item.id)}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;