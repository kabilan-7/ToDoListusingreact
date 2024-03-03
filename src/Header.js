
import React from "react"
const Header = (props) => {
 
  return (
  <div className="heading">
    <h1 className="head">{props.tittle}</h1>
  </div>
  )
}
Header.defaultProps={ //if the props cannot send it get it from here
  tittle:"To do list"
}
export default Header