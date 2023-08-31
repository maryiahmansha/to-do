import { useState } from 'react';
import './App.css';

function App() {

  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false }
      ]
    })
    setNewItem("")
  }

  const toggleTodo = (id, completed) => {
    setTodos(currentTodos => {
      return (
        currentTodos.map(todo => {
          if (todo.id === id) {
            return { ...todo, completed }
          }
          return todo
        })
      )
    })
  }

  const deleteTodo = (id) => {
    setTodos(currentTodos.filter(todo => todo.id !== id))
  }

  return (
    <>
      <form className='new-item-form' onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor='item'>New Item</label>
          <input type='text' id='item' value={newItem} onChange={(e) => { setNewItem(e.target.value) }} />
        </div>
        <button className="btn">Add</button>
      </form>
      <div className='to-do-checkList'>
        <h1 className="header">Todo List</h1>
        <ul className="list">
          {todos.map(todo => {
            return (
              <li key={todo.id}>
                <label className='checkbox'>
                  <input type='checkbox' checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} />
                  {todo.title}
                </label>
                <button className="btn-delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default App;
