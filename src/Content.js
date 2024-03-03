
//ctrl+alt+R
//we cannnot uses useState in class
import React from "react"
import ItemsList from "./ItemsList";
 

const Content = ({items,handlecheck,handletrash}) => {
  
  return (
    <>
      {items.length?
       (<ItemsList items={items}
        handlecheck={handlecheck}
        handletrash={handletrash}/>):(
        <p className="displaymessage">The List is Empty</p>
       )}
    </>
  )
}

export default Content