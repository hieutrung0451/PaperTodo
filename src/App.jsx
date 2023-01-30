import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import FormTodo from "./components/FormTodo";
import TodoList from "./components/TodoList";

const Container = styled.div`
  background-color: #f1f1f1;
  margin: 0;
  min-height: 100vh;
`;

const Paper = styled.div`
  width: 480px !important;
  background-color: white;
`;

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (newTask) => {
    setTasks([newTask, ...tasks]);
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  return (
    <Container className="row flex-center flex-middle">
      <Paper className="border border-primary padding-large margin-large no-responsive">
        <h3 className="margin-small">Paper Todo</h3>
        <FormTodo addNewTask={addNewTask} />
        <TodoList tasks={tasks} />
        <button onClick={clearAllTasks} className="margin-top-large">
          Clear
        </button>
      </Paper>
    </Container>
  );
};

export default App;
