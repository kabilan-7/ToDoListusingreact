import React from "react"
import ListItems from "./ListItems";
const ItemsList = ({items,handlecheck,handletrash}) => {
  return (
    <ul className="ullist">
    {
      items.map((item)=>(
        <ListItems
        item={item}
        key={item.id}
        handlecheck={handlecheck}
        handletrash={handletrash}
        />
      ))
    }
   </ul>
   )
  
}

export default ItemsList