const ToDoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
    return (
        <li key={id}>
            <label className='checkbox'>
                <input type='checkbox' checked={completed} onChange={e => toggleTodo(id, e.target.checked)} />
                {title}
            </label>
            <button className="btn-delete" onClick={() => deleteTodo(id)}>Delete</button>
        </li>
    );
}

export default ToDoItem;