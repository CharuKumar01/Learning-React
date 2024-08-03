import { createContext, useContext, useState } from "react";

// Initial state
const initialState = [
  {
    id: 1,
    todo: "Example Todo",
    completed: false,
  }
];

// Create context with initial values
export const TodoContext = createContext({
  todos: initialState,
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {}
});

// Custom hook to use the Todo context
export const useTodo = () => {
  return useContext(TodoContext);
};

// Provider component
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(initialState);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), ...todo }
    ]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      {children}
    </TodoContext.Provider>
  );
};
