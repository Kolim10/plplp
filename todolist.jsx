import TodoCard from "./TodoCard";

function ToDoList(props){
    return (
        <div>
            <ul className="main">
                {props.todos.map((item,index) => (
                 <TodoCard index={index} handleDeleteTodo={props.handleDeleteTodo}>
                    <p>{item}</p>
                 </TodoCard>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;