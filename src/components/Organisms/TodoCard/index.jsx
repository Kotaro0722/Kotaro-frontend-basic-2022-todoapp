import styled from "styled-components";
import React, { useState } from "react";
import AddTaskButton from "../../Atoms/AddTaskButton/index.jsx";

const TodoCard = () => {
  const [taskList, setTaskList] = useState();
  const onAddTaskButtonClick = () => {
    setTaskList((prevState) => [
      ...prevState,
      { name: "", initializing: true },
    ]);
  };
  const onTaskComplete = (index) => {
    setTaskList((prevState) =>
      prevState.filter((taskList, index) => taskList[index])
    );
  };
  const onTaskNameChange = (value, index) => {
    if (value == null) {
    } else {
    }
  };
  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick}>
        <StyledTaskList></StyledTaskList>
      </AddTaskButton>
    </StyledWrapper>
  );
};

export default TodoCard;

const StyledWrapper = styled.div``;
const StyledTaskList = styled.div;
