import React, { useState } from "react";
import styled from "styled-components";

const Complete = styled.div`
  background-color: #c1c0bd;
  text-decoration: line-through;
`;

const TodoItem = ({ text, completed }) => {
  // const [complete, SetComplete] = useState(false);

  // const todoComplete = () => {
  //   SetComplete(!complete);
  // };

  return (
    <>
      {completed === "active" ? (
        <div className="padding-small border border-primary margin-bottom shadow">
          {text}
        </div>
      ) : (
        <Complete className="padding-small border border-primary margin-bottom shadow">
          {text}
        </Complete>
      )}
    </>
  );
};

export default TodoItem;
