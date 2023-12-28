import { useState } from "react"

const NewToDoForm = ({ onSubmit }) => {
    const [newItem, setNewItem] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newItem == "") return
        onSubmit(newItem)
        setNewItem("")
    }

    return (
        <form onSubmit={handleSubmit} className='new-item-form'>
            <div className="form-row">
                <label htmlFor='item'>New Item</label>
                <input type='text' id='item' value={newItem} onChange={(e) => { setNewItem(e.target.value) }} />
            </div>
            <button className="btn px-0.5">Add</button>
        </form>
    );
}

export default NewToDoForm;
