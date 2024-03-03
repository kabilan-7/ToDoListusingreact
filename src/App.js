
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import { useState,useEffect } from "react"
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import apiRequest from './apiRequest';
function App() {
  const API_URL="http://localhost:3500/items"
  const [items,setItems]= useState(
     []
);
const [newItem,setNewItem]=useState('')
const [search,setSearch]=useState('')
const [fetchError,setFetchError]=useState(null)
const [isLoading,setisLoading]=useState(true)
useEffect(()=>{
  const fetchItems= async ()=>{
    try{
      const response= await fetch(API_URL);
      if(!response.ok) throw Error("Data not recieved")
      console.log(response);
      const listItems=await response.json();
      setItems(listItems)
      setFetchError(null)
    }catch(err){
      setFetchError(err.message)
    }finally{
      setisLoading(false)
    }
  }
  setTimeout(()=>{
    fetchItems()
  },2000)
},[])

const addItem=async (item)=>{
  const id=items.length?items[items.length-1].id+1:1
  const addnewItem={id,checked:false,item}
  const newList=[...items,addnewItem];
  setItems(newList)
  const postOpt={
    method:'POST',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(addnewItem)
     
  }
 
  const result=await apiRequest(API_URL,postOpt);
  if(result) setFetchError(result);
}

const handleSubmit=(e)=>{
  e.preventDefault();
console.log(newItem);
addItem(newItem)
setNewItem('')
}
const handlecheck=async (id) =>
{
  const newList=items.map((item)=> item.id===id?{...item,checked:!item.checked}:item);
  setItems(newList)
  const myItem=items.filter((item)=>item.id===id)
  const updateOpt={
    method:'PATCH',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify({checked:myItem[0].checked})
     
  }
  const reqUrl=`${API_URL}/${id}`
  const result=await apiRequest(reqUrl,updateOpt);
  if(result) setFetchError(result);
  
}
   const handletrash=(id)=>{
    const newList=items.filter((item)=>item.id!==id);
    setItems(newList)
  
   }
  return (
    <div className='App'>
      <Header />
      <AddItem
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
      <SearchItem
      search={search}
      setSearch={setSearch}
      />
      <main>
        {isLoading && <p className='load'>Loading....</p>}
        {fetchError && <p className='errormess'>{`Error:${fetchError}`}</p>}
     {!isLoading && !fetchError && <Content 
      items={items.filter(item=>
        (item.item).toLowerCase().includes(search.toLowerCase())
      )}
      handlecheck={handlecheck}
      handletrash={handletrash}
      />}
      </main>
      <Footer
      length={items.length} 
      />
    </div>
  );
}

export default App;
