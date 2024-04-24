"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import React, { useState } from "react";

export default function Home() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<{id:string;title:string}[]>([]);

  const saveTodo = () => {
    if (todo) {
      const newTodo = { id: new Date().getTime().toString(), title: todo };
      setTodos([...todos, newTodo]);
      localStorage.setItem("localSaves", JSON.stringify([...todos, newTodo]));
      setTodo("");
    }
  };
  const handleDelete = (todo:any)=>{
          const deleted = todos.filter((t)=> t.id !== todo.id)
          setTodos(deleted)
          localStorage.setItem("localSaves", JSON.stringify(deleted))

  }

  function handleTodo(e: React.ChangeEvent<HTMLInputElement>) {
    setTodo(e.target.value);
  }

  return (
    <div className="text-black flex-col flex items-center justify-center p-4">
      <a className="text-6xl italic mb-5">TODO-APP</a>
      <div className="flex flex-col items-top justify-center bg-black/90 rounded-xl p-4 w-full md:w-[400px] h-[600px] ">
        <div className="flex flex-col items-center bg-white min-w-full h-40 rounded-lg">
          <h1 className="mt-4">Add new TODO</h1>
          <input
            placeholder="..."
            id="input"
            type="text"
            className="mt-4 h-10 text-black p-1 outline"
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
        <div className="mt-2 flex ">
          <ScrollArea className="h-96 min-w-full rounded-md border overflow-y-auto p-2">
            {todos.map((todos) => (
              <React.Fragment key={todos.id}>
                <div className="mt-1 text-black gap-2">
                  <Accordion
                    className="flex flex-row bg-white rounded-lg items-center justify-center p-4 min-w-full"
                    type="single"
                    collapsible
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="rounded-sm px-1">
                        {todos.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col items-center justify-center mt-2">
                          
                          <button
                            className="mt-2 bg-[#780000] rounded-md px-6 text-white"
                            onClick={() => handleDelete(todos)}
                          >
                            DELETE
                          </button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </React.Fragment>
            ))}
          </ScrollArea>
        </div>
      </div>
      <div className="mt-2 flex justify-between gap-6 items-center">
        <h1>Made by Acaj0</h1>
      <a className="w-7 h-7" href="https://github.com/Acaj0/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </svg>
        </a>
        </div>
    </div>
  );
}
