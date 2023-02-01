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

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
        <div className="row">
          <button onClick={clearAllTasks} className="margin-top-large">
            Clear
          </button>
          {/* <div class="form-group">
            <label for="paperSelects1">Select</label>
            <select id="paperSelects1">
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div> */}
        </div>
      </Paper>
    </Container>
  );
};

export default App;
