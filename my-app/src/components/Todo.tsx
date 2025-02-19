import { useEffect, useRef, useState } from 'react';
import todo_icon from '../assets/todo_icon.png';
import TodoItems from './TodoItems';
import { motion } from "framer-motion";

const Todo = () => {
  const [todoList, setTodoList] = useState<
    { id: number; text?: string; isComplete: boolean }[]
  >([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [dateTime, setDateTime] = useState("");

  const completedCount = todoList.filter((todo) => todo.isComplete).length;
  const totalTodos = todoList.length;
  const progress = totalTodos > 0 ? (completedCount / totalTodos) * 100 : 0;

  const add = () => {
    const inputText = inputRef.current?.value.trim();
    if (!inputText)
      return alert ("Task cannot be empty");
  
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const deleteTodo = (id: number) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggle = (id: number) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  const editTodo = (id: number, newText: string) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  // Set up interval for updating date and time
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-400">
      <div className="w-11/12 h-full max-w-4xl flex flex-col p-4 min-h-[450px] rounded-xl bg-slate-400">
        {/* Title Section */}
        <div className="flex flex-col items-center mt-7">
          <div className="flex items-center space-x-2">
            <img className="w-8" src={todo_icon} alt="To-Do Icon" />
            <h1 className="text-3xl font-semibold">To-Do List</h1>
          </div>
          <h2 className="font-semibold text-2xl mt-3 text-center">{dateTime}</h2>
        </div>

        {/* Progress Bar */}
        <div className="my-6 px-4">
          <p className="text-lg font-semibold text-center">
            Progress: {Math.round(progress)}%
          </p>
          <div className="mx-auto mt-4 w-full sm:w-8/12 bg-gray-300 h-5 rounded-full transition-transform delay-150 duration-300 hover:scale-105">
          <motion.div
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-green-500 h-full rounded-full"
        />
          </div>
        </div>

        {/* Input Box */}
        <div className="flex justify-center my-7">
          <div className="flex items-center bg-gray-200 rounded-full max-w-lg w-full h-11 px-0">
            <input
              ref={inputRef}
              className="bg-transparent border-0 outline-none flex-1 text-center placeholder:text-slate-600 text-xl"
              type="text"
              placeholder="Add your task"
            />
            <motion.button
              whileHover={inputRef.current?.value.trim() ? { scale: 1.1 } : {}}
              onClick={add}
              className={`rounded-full bg-orange-600 ${!inputRef.current?.value.trim() ? 'cursor-not-allowed' : 'hover:bg-orange-700'} w-28 sm:w-44 ml-8 h-11 text-white text-2xl font-medium`}
            >
              Add +
              </motion.button>
            
          </div>
        </div>

        {/* To-Do List */}
        <div className="px-4">
          {todoList.map((item) => (
            <TodoItems
              key={item.id}
              text={item.text || "Default Todo"}
              id={item.id}
              isComplete={item.isComplete}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          ))}
        </div>
      </div>
    </div>
   
  );
};

export default Todo;
