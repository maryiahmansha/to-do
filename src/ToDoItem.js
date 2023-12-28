const ToDoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
    return (
        <li key={id} >
            <label className='checkbox font-extrabold'>
                <div className="to-do-list-name">
                    <input type='checkbox' checked={completed} onChange={e => toggleTodo(id, e.target.checked)} className="checkbox" />
                    <span style={{ fontWeight: 'bold', textDecoration: completed ? 'line-through' : 'none' }}>{title}</span>
                </div>
            </label>
            <button className="btn-delete" onClick={() => deleteTodo(id)}>Delete</button>
        </li >
    );
}

export default ToDoItem;
