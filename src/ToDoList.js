import ToDoItem from './ToDoItem.js';

const ToDoList = ({ todos, toggleTodo, deleteTodo }) => {

    return (
        <ul className="list">
            {todos.length === 0 && "Nothing to do"}
            {todos.map(todo => {
                return (
                    <ToDoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                )
            })}
        </ul>
    )
}

export default ToDoList;