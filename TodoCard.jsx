function ToDoCard(props) {

  return (
    <li className="todoItem">
      <div className="actionsContainer">
        {props.children}
        <i className="fa-solid fa-pen-to-square" aria-label="Edit"></i>
        <button onClick={() => props.handleDeleteTodo(props.index)}>
        <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default ToDoCard;