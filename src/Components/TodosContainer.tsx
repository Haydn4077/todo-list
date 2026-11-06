//This component will have a todo list as a prop
//Then we will map into several todo cards
import type { todosContainerProps } from "./TodoApp";
import TodoCard from "./TodoCard";

export default function TodosContainer({
  todosList,
  handleTodoCheck,
  handleDeleteTodo,
  handleEditTodo,
}: todosContainerProps) {
  return (
    <div>
      {todosList.length > 0 || "todo list is empty"}
      {todosList.map((todo) => (
        <TodoCard
          key={todo.id}
          {...todo}
          handleTodoCheck={handleTodoCheck}
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
        />
      ))}
    </div>
  );
}
