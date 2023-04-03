import styled from "styled-components";
import React, { useState, useEffect } from "react";
import AddTaskButton from "../../Atoms/AddTaskButton/index.jsx";
import Task from "../../Molecules/Task/index.jsx";
import COLOR from "../../../variables/color.js";

const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data) {
      const liftedTaskList = JSON.parse(data);
      setTaskList(liftedTaskList);
    }
  }, []);
  useEffect(() => {
    const EditedTaskList = JSON.stringify(taskList);
    localStorage.setItem("data", EditedTaskList);
  });
  const onAddTaskButtonClick = () => {
    setTaskList((prevState) => [
      ...prevState,
      { name: "", initializing: true },
    ]);
  };
  const onTaskComplete = (completedIndex) => {
    setTaskList((prevState) => {
      const filterdArray = prevState.filter(
        (_, index) => completedIndex !== index
      );
      return filterdArray;
    });
  };
  const onTaskNameChange = (changedTaskName, changedIndex) => {
    if (!changedTaskName) {
      onTaskComplete(changedIndex);
    } else {
      setTaskList((prevState) =>
        prevState.map((value, index) => {
          if (changedIndex === index) {
            return { ...value, name: changedTaskName };
          } else {
            return { ...value };
          }
        })
      );
    }
  };
  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        {taskList.map((task, index) => (
          <Task
            key={index}
            onTaskChange={(value) => onTaskNameChange(value, index)}
            onTaskComplete={() => onTaskComplete(index)}
            taskName={task.name}
            defaultIsEditing={task.initializing}
          />
        ))}
      </StyledTaskList>
    </StyledWrapper>
  );
};

export default TodoCard;

const StyledWrapper = styled.div`
  background-color: ${COLOR.LIGHT_BLACK};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;
`;
const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 2px 6px;
`;
