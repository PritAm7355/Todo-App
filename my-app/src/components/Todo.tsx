import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {
  const [todoList, setTodoList] = useState<{ id: number; text?: string; isComplete: boolean; }[]>([]);
const inputRef=useRef<HTMLInputElement>(null);
const[dateTime, setDateTime] = useState("");


const add=()=>{
const InputText=inputRef.current?.value.trim();
 if( InputText=="")
 {
  return null;
 }
 const newTodo={
    id: Date.now(),
    text:InputText,
    isComplete:false,
 }
 setTodoList((prev)=>[...prev,newTodo]);
 if (inputRef.current) {
  inputRef.current.value = "";
}
    }

    const deleteTodo=(id:number)=>{
      setTodoList((prvTodos)=>{
        return prvTodos.filter((todo)=>todo.id!=id)
      })
    }
 
    const toggle = (id: number) => {
      setTodoList((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
        )
      );
    };
//Todo Date and Time
    setInterval(()=>{
      const now= new Date ();
    const formattedDate= now.toLocaleDateString();
    const formattedTime= now.toLocaleTimeString();
    setDateTime(`${formattedDate}-${formattedTime}`)},1000);

    useEffect(()=>{
     localStorage.setItem("todos", JSON.stringify(todoList));
    },[todoList])
    
  return (
    <div className="w-full h-screen flex justify-center items-center mt-7 mb-10 bg-white">
<div className='bg-white w-11/12 h-screen place-self-center max-w-4xl flex flex-col p-7 min-h-[450px] rounded-xl '>
 {/* --------title------------ */}
 <div className="flex flex-col items-center mt-7">
  {/* To-Do List Heading with Icon */}
  <div className="flex items-center space-x-2">
    <img className="w-8" src={todo_icon} alt="To-Do Icon" />
    <h1 className="text-3xl font-semibold">To-Do List</h1>
  </div>

  {/* Date and Time */}
  <h2 className="font-semibold text-2xl mt-3 text-center">{dateTime}</h2>
</div>

{/* ---------input box--------- */}
<div className="flex justify-center my-7">
<div className='flex items-center my-7 bg-gray-200 rounded-full max-w-md '>
    <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-12 w-full pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task' />
    <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>Add +</button>
</div>
</div>
{/* ---------To do list--------- */}
<div>
  {todoList.map((item,index)=>{
return <TodoItems key={index} text={item.text || "Default Todo"} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo}  toggle={toggle} />

})}
</div>
    </div> 
    </div>
  )
}

export default Todo