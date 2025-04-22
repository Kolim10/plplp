import { useState } from "react";
function ToDoInput(props) {
    const [todoInput, setTodoInput] = useState("");
    function handleAddTodo() {
        props.handleAddTodo(todoInput);
        setTodoInput("");
    }
    return (
        <header>
            <input placeholder="enter a todo" 
                value={todoInput}
                    onChange={(e) => setTodoInput(e.target.value)}
                />
            <button onClick={handleAddTodo}>Add</button>
        </header>
    );
}

export default ToDoInput; 