import React from "react"
import {  FaTrashAlt } from "react-icons/fa";
const ListItems = ({item,handlecheck,handletrash}) => {
  return (
    <li className="listitems">
    <input 
    type="checkbox"
    onChange={()=> handlecheck(item.id)}
    checked={item.checked}
    className="checkbox"
    />
    <label 
    style={(item.checked)?{textDecoration:"line-through"}:null}
    onDoubleClick={()=> handlecheck(item.id)}>
    {item.item}
    </label>
    <FaTrashAlt
    role="button"
    onClick={()=>handletrash(item.id)}
    className="trash"
    tabIndex="0"
    aria-label={`Delete ${item.item}`}
    />
    
  </li>
  )
}

export default ListItems