import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem key={task.id} name={task.name} />
      ))}
    </ul>
  );
};

export default TodoList;
