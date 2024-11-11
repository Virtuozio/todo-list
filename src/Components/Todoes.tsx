import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../Hooks/hook";
import { fetchTodos, toggleTodo } from "../Reducers/TodoReducer";

function Todoes() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todo.todos);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<"all" | "completed" | "uncompleted">("all");

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const todosPerPage = 10;
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "uncompleted") return !todo.completed;
    return true;
  });
  const totalPages = Math.ceil(filteredTodos.length / todosPerPage);
  const currentTodos = filteredTodos.slice(
    (currentPage - 1) * todosPerPage,
    currentPage * todosPerPage
  );

  const handleFilterChange = (newFilter: "all" | "completed" | "uncompleted") => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const handleToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo List </h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "10px" }}>
        <button onClick={() => handleFilterChange("all")}>Show All</button>
        <button onClick={() => handleFilterChange("completed")}>Show Completed</button>
        <button onClick={() => handleFilterChange("uncompleted")}>Show Uncompleted</button>
      </div>

      <ul>
        {currentTodos.map((todo) => (
          <li key={todo.id}>
            {todo.id}. {todo.title}{" "}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>
        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}{" "}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Todoes;
