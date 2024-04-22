"use client";
import { useState } from "react";

export default function Home() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<any[]>([]);

  const saveTodo = () => {
    if (todo) {
      const newTodo = { id: new Date().getTime().toString(), title: todo };
      setTodos([...todos, newTodo]);
      localStorage.setItem("localSaves", JSON.stringify([...todos, newTodo]));
      setTodo("");
    }
  };

  function handleTodo(e: any) {
    setTodo(e.target.value);
  }

  return (
    <div className="text-black flex-col flex items-center justify-center mt-10 p-4">
      <a className="text-6xl italic mb-5">TODO-APP</a>
      <div className="flex items-top justify-center bg-gray-800/35 text-black rounded-xl w-full md:w-[400px] h-[600px] ">
        <div className="flex flex-col items-center">
          <h1 className="mt-4">Add new TODO</h1>
          <input
            placeholder="..."
            id="input"
            type="text"
            className="mt-6 h-10 text-black"
            value={todo}
            onChange={(e) => handleTodo(e)}
          />
          <button
            type="submit"
            onClick={saveTodo}
            className="bg-green-500/50 rounded-lg mt-2 p-2"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
