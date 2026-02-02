import styles from "./AppToDo.module.css"
import { useState } from "react";
import { MdAddCard } from "react-icons/md";

function AppToDo({onAddTodo}) {
  const [todoName, setTodoName] = useState("");
  const [dueDate,  setDueDate]  = useState("");

  const handleAddClick = () => {
    if (todoName === "" || dueDate === "") return;

    onAddTodo(todoName, dueDate);

    // ✅ Clear inputs after adding
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container text-center">
      <div className={`row ${styles["kg-row"]}`}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter ToDO Here"
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
        </div>

        <div className="col-4">
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        <div className="col-2">
          <button
            type="button"
            className={`btn btn-success ${styles["kg-button"]}`}
            onClick={handleAddClick}
          >
            <MdAddCard />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppToDo;
