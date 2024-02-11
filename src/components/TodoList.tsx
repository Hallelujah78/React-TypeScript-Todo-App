import "./TodoList.css";

interface TodoListProps {
  todos: { id: string; text: string }[];
  deleteTodoHandler: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodoHandler }) => {
  return (
    <ul>
      {todos.map((item) => {
        return (
          <li id={item.id} key={item.id}>
            <span>{item.text}</span>
            <button onClick={deleteTodoHandler.bind(null, item.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
