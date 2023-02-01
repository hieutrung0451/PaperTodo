import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FormTodo = ({ addNewTask }) => {
  const [text, setText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: text,
      completed: false,
    };

    addNewTask(newTask);

    setText("");
  };

  return (
    <form
      className="margin-top-large margin-bottom-large"
      onSubmit={submitHandler}
    >
      <div className="form-group row">
        <input
          type="text"
          placeholder="new todo"
          id="todo-input"
          className="margin-right"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="btn-small shadow">
          Add
        </button>
      </div>
    </form>
  );
};

export default FormTodo;
