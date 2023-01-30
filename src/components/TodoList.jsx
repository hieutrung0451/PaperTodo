import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks }) => {
  return (
    <ul>
      {tasks.length === 0 ? (
        <div>Chill Scene</div>
      ) : (
        tasks.map((task) => (
          <TodoItem key={task.id} text={task.text} completed={task.completed} />
        ))
      )}
    </ul>
  );
};

export default TodoList;
