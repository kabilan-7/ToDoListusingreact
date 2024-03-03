import React from "react"
import { FaPlus } from "react-icons/fa"
import { useRef } from "react"

const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  const inputref=useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
        <input
        type="text"
        ref={inputref}
        id="additem"
        value={newItem}
        placeholder="Add new task.."
        required
        onChange={(e)=>setNewItem(e.target.value)}
        />
        <button
        type="submit"
        className="submitbtn"
        aria-label="Add Item"
        onClick={()=>inputref.current.focus()}
        >
        <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem