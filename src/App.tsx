import { useState } from "react";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

// models
import { ToDo } from "./models/todo.model";

const todosArray = [
  { id: "t1", text: "shave cat" },
  { id: "t2", text: "make cheese" },
  { id: "t3", text: "polish moon" },
  { id: "t4", text: "discover America ... again" },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>(todosArray);

  const addTodoHandler = (value: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: value },
    ]);
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} deleteTodoHandler={deleteTodoHandler} />
    </div>
  );
};

export default App;
