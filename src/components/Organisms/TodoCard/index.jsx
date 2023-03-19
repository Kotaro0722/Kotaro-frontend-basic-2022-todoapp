import styled from "styled-components";
import React, { useState } from "react";
import AddTaskButton from "../../Atoms/AddTaskButton/index.jsx";
import Task from "../../Molecules/Task/index.jsx";

const TodoCard = () => {
  const [taskList, setTaskList] = useState([{}]);
  const onAddTaskButtonClick = () => {
    setTaskList((prevState) => [
      ...prevState,
      { name: "", initializing: true },
    ]);
  };
  const onTaskComplete = (index) => {
    setTaskList((prevState) => {
      for (let i in taskList) {
        if (i != index) {
          [...prevState, { name: taskList[i], initializing: taskList[i] }];
        }
      }
    });
  };
  const onTaskNameChange = (value, index) => {
    if (value == null) {
      onTaskComplete(index);
    } else {
      setTaskList((taskList[index].name = value));
    }
  };
  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick}>
        <StyledTaskList>
          {taskList.map((task, index) => (
            <Task
              key={index}
              onTaskChange={onTaskNameChange(task, index)}
              onTaskComplete={onTaskComplete(index)}
              taskName={task.name}
              defaultIsEditing={task.initializing}
            ></Task>
          ))}
        </StyledTaskList>
      </AddTaskButton>
    </StyledWrapper>
  );
};

export default TodoCard;

const StyledWrapper = styled.div``;
const StyledTaskList = styled.div;
