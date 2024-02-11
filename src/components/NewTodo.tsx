import { useRef } from "react";

import "./NewTodo.css";

type NewTodoProps = {
  addTodoHandler: (value: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = ({ addTodoHandler }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    addTodoHandler(enteredText);
    textInputRef.current!.value = "";
  };

  return (
    <form className="form-control" onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input ref={textInputRef} id="todo-text" type="text" />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};
export default NewTodo;
