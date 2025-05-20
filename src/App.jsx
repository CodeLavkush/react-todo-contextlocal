import React, { useEffect, useState } from "react";
import { TodoForm, TodoItem } from "./components/index";
import { TodoProvider } from "./contexts";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodo) => [...prevTodo, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prevTodo) =>
      prevTodo.map((prev) => (prev.id === id ? todo : prev))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((prev) => prev.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((prev) =>
        prev.id === id ? { ...prev, isCompleted: !prev.isCompleted } : prev
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoProvider
        value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}
      >
        <div className="min-h-screen w-full bg-gray-900 text-white flex flex-col items-center gap-4 py-10 px-4">
          <div className="w-full max-w-2xl flex justify-center items-center">
            <TodoForm />
          </div>
          <div className="w-full max-w-2xl flex flex-col items-center gap-2">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
