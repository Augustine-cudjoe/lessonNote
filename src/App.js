import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import FormInput from './component/FormInput';
import { useCallback, useEffect, useState } from 'react';
import { ListGroup, Row } from 'react-bootstrap';
import TodoDisplay from './component/TodoDisplay';
import Search from './component/Search';
import Edit from './component/Edit';



function App() {

let [todoHolder, setTodoHolder]=useState([])
const [query, setQuery]=useState(" ")
const [isEditing,setIsEditing]=useState(false)



const dotoFetch=useCallback(()=>{
  fetch("./Data.json")
  .then(res=>res.json())
  .then(data=>setTodoHolder(data))
  .catch((error)=>console.log(error))
 },[])

 useEffect(()=>{
  dotoFetch()

 }, [dotoFetch])

 const onDelete=id=>{
  console.log(todoHolder)
  setTodoHolder(todoHolder.filter((holde)=>holde.id !==id))
 }

  const editTodo = id=>{
    setTodoHolder(todoHolder.map(item=> item.id === id ? 
      {...item, isEditing:!item.isEditing}:item))
  }
 const editToggle=(id, update)=>{
   setTodoHolder(todoHolder.map(item=>item.id ===id? 
    {...item, update, isEditing:!item.isEditing}: item))
 }

 const todoFilter=todoHolder.filter((item)=>{
  return(
     item.subject.toLowerCase().includes(query.toLowerCase()) 
     

  )
 })


 
  return (
    <div className="App">
     <Row>
     <FormInput onSendTodo={(mytodo)=>setTodoHolder([mytodo, ...todoHolder])}
      lastId={todoHolder.reduce((mim, current)=>Number(current.id) > mim ? Number(current.id): mim, 0)}/>
     </Row>
      
      <Row>
        <Search  query={query}
        onQueryChange={myQuery=>setQuery(myQuery)}/>
      </Row>

     <Row >
      <ListGroup>
        {
           todoFilter.map(item=>(
             item.isEditing ? (<Edit key={item.id} item={item}  editTodo={editToggle} />):
             ( <TodoDisplay key={item.id}
              item={item}  
              onDelete={onDelete}
              editTodo={editTodo}/>)
            )
            
            
          )
        }
      </ListGroup>
     </Row>
    </div>
  );
}

export default App;
