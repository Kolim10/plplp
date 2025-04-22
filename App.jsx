import { useState } from "react";
import ToDoInput from "./todoInput";
import ToDoList from "./todolist";

function App() {
  const [todos, setTodos] = useState([
    "go to the gym",
    "Eat more fruits",
    "pick up groceries"
  ]);
  function handleAddTodo(newTodo) {
    const newTodosList = [...todos, newTodo];
    setTodos(newTodosList);
  }
  function handleDeleteTodo(index) {
    const newTodosList = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(newTodosList);
  }

  return (
    <div className="container">
      <ToDoInput handleAddTodo={handleAddTodo} />
      <ToDoList todos={todos} handleDeleteTodo={handleDeleteTodo}/>
    </div>
  );
}

export default App;
