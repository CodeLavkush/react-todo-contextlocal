import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, isCompleted: false });
    setTodo("");
  };

  return (
    <div className="w-full px-2">
      <form
        onSubmit={add}
        className="flex flex-wrap sm:flex-nowrap items-center w-full gap-2"
      >
        <input
          type="text"
          className="flex-1 rounded-sm border border-white shadow-2xl p-2 bg-gray-800 text-white placeholder-gray-400 outline-none"
          placeholder="Write your todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-sm p-2 w-full sm:w-24 bg-amber-600 text-white cursor-pointer active:scale-95 shadow-2xl hover:bg-amber-800 transition-all"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
