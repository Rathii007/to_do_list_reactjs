import React, { useState } from "react";
import styled from "styled-components";

const TodoItemContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

const TaskText = styled.span`
  flex: 1;
  margin-left: 10px;
`;

const TodoItem = ({ text, completed, onToggleCompleted }) => {
  return (
    <TodoItemContainer>
      <input type="checkbox" checked={completed} onChange={onToggleCompleted} />
      <TaskText style={{ textDecoration: completed ? "line-through" : "none" }}>
        {text}
      </TaskText>
    </TodoItemContainer>
  );
};

export default TodoItem;
