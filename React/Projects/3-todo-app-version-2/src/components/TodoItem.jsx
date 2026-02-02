import styles from "./TodoItem.module.css";
function TodoItem({todoName, todoDate}) {

  return (
    <div className="container">
      <div className={`row ${styles["kg-row"]}`}>
        <div className="col-6">{todoName} </div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className={`btn btn-danger ${styles["kg-button"]}`}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
