import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({todoItems}) =>{
  return (
    <div className={styles["items-container"]}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;