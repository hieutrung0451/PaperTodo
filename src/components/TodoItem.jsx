import React, { useState } from "react";
import styled from "styled-components";

const Complete = styled.div`
  background-color: #c1c0bd;
  text-decoration: line-through;
`;

const TodoItem = ({ text, completed }) => {
  return (
    <>
      {completed === false ? (
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
