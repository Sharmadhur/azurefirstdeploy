import styles from "./AppToDo.module.css";
import { useRef } from "react";
import { MdAddCard } from "react-icons/md";

function AppToDo({ onAddTodo }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value  = "";
    if (todoName === "" || dueDate === "") return;

    onAddTodo(todoName, dueDate);

  };

  return (
    <div className="container text-center">
      <form className={`row ${styles["kg-row"]}`} onSubmit={handleAddClick}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter ToDO Here"
          />
        </div>

        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
          />
        </div>

        <div className="col-2">
          <button
            type="submit"
            className={`btn btn-success ${styles["kg-button"]}`}
          >
            <MdAddCard />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AppToDo;
