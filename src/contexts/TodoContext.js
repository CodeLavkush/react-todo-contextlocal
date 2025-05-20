import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: Date.now(),
            todo: " dummy todo",
            isCompleted: false,
        },
    ],
    addTodo: (todo)=>{},
    updateTodo: (id, todo)=>{},
    deleteTodo: (id)=>{},
    toggleCompleted: (id)=>{}
})


export function useTodo(){
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider