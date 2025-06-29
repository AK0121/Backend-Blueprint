"use client";
import { useState, useEffect } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const fetchTodos = async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    setTodos(data);
  };

  const addTodo = async () => {
    await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ text }),
    });
    setText("");
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await fetch("/api/todos", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="todo-app-container overflow-auto bg-gradient-to-l from-[#adf88b] to-[#c3f280] h-[28rem] w-80 text-lg text-black font-semibold px-4 py-3">
        <ul className="todo-display flex flex-col justify-center gap-2.5">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex flex-row justify-between items-center border-b-2 border-black/80 pb-2"
            >
              <span>{todo.text}</span>
              <span
                onClick={() => deleteTodo(todo.id)}
                className="bg-red-400 text-white text-xl rounded-full w-8 h-8 text-center hover:scale-110 hover:bg-red-600 cursor-pointer transition-all duration-150 ease-in-out"
              >
                X
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <input
          name="todo-task"
          id="todo-task"
          placeholder="Write your todo..."
          type="text"
          className="bg-[#dfffdc] p-5 text-black outline-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTodo();
          }}
        />
        <button onClick={addTodo} className="bg-green-400 p-5 text-black cursor-pointer hover:bg-green-500">
          Add
        </button>
      </div>
    </div>
  );
};

export default Todo;
