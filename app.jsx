import React, {useState } from "react";

const App = () => {
  const[todo, setTodo] = React.useState("");
  const[todolist, setTodoList] = useState([]);

  const addtodo = () => {
    if(todo.trim()==='') return;
    setTodoList([...todolist,{id:Date.now(), text:todo, completed:false}])
    setTodo('');

  }
  const togglecomplete = (id) => 
    setTodoList(
      todolist.map((item) =>
        item.id === id ? {...item, completed: !item.completed} : item
    )
    )
    const deletetodo = (id) =>{
      setTodoList
      (todolist.filter((item) => item.id !== id));
    }
    return (  
    <div>
      <h1>To-Do List</h1>
      <div className="inputcontainer">
        <input
         type="text"
         placeholder="add a new task." 
         value={todo}
         onChange={(e) => setTodo(e.target.value)}
         />
        <button className="add-btn" onClick={addtodo}>Add</button>
      </div>
      <ul className="todolist">
        {todolist.map((item) => (
          <li key={item.id} 
          onClick={()=> togglecomplete(item.id)}
          style={{
            cursor: 'pointer',
            textDecoration: item.completed ? 'line-through' : 'none',
            color: item.completed ? 'gray' : 'black'
          }}
          >
            <span>{item.text}</span>
            <button
             className="delete btn"
             onClick={(e)=>{
              e.stopPropagation();
              deletetodo(item.id);
             }}>
              delete</button>
          </li>
        ))}

      </ul>
    </div>
  )
}
export default App;
