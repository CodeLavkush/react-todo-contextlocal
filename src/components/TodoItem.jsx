import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoItem({ todo }) {
  const [isEditable, setIsEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleCompleted } = useTodo();

  const toggleComplete = () => {
    toggleCompleted(todo.id);
  };

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsEditable(false);
  };

  return (
    <div
      className={`w-full max-w-2xl min-h-12 rounded-lg flex flex-wrap sm:flex-nowrap justify-between items-center p-2 gap-2 shadow-sm transition-all ${
        todo.isCompleted
          ? "bg-green-400 bg-opacity-80 line-through"
          : "bg-red-200"
      }`}
    >
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={toggleComplete}
        className="cursor-pointer"
      />

      <input
        type="text"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isEditable}
        className={`flex-1 min-w-[100px] bg-transparent outline-none text-black p-1 break-words ${
          isEditable ? "border border-black" : "border border-transparent"
        }`}
      />

      <div className="flex justify-center items-center gap-2">
        <button
          className="cursor-pointer text-lg"
          onClick={() => {
            if (todo.isCompleted) return;
            if (isEditable) {
              editTodo();
            } else setIsEditable((prev) => !prev);
          }}
          disabled={todo.isCompleted}
        >
          {isEditable ? "📁" : "✏️"}
        </button>
        <button
          className="cursor-pointer text-lg"
          onClick={() => deleteTodo(todo.id)}
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
