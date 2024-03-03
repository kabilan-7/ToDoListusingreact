import React from "react"

const SearchItem = ({search,setSearch}) => {
  return (
    <div className="searchcontainer">
        <label htmlFor="search"></label>
    <input 
      id="search"
      type="text"
      role="searchbox"
      placeholder="Search Lists"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
    />
    </div>
  )
}

export default SearchItem