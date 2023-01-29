import React from "react";

const TodoItem = ({ name }) => {
  return (
    <div className="padding-small border border-primary margin-bottom shadow">
      {name}
    </div>
  );
};

export default TodoItem;
