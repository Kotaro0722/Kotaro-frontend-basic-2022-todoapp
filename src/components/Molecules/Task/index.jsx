import React, { useState } from "react";
import styled from "styled-components";
import CheckBox from "../../Atoms/Checkbox/index.jsx";
import Input from "../../Atoms/Input/index.jsx";
import EditButton from "../../Atoms/EditButton/index";

const Task = ({ onTaskChange, onTaskComplete, taskName, defaultIsEditing }) => {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);
  const onEditComplete = (value) => {
    setIsEditing(false);
    () => onTaskChange(value);
    console.log(isEditing);
  };
  const onEditButtonClick = () => {
    setIsEditing(true);
    console.log(isEditing);
  };
  return (
    <StyledWrapper>
      <StyledCheckBoxWrapper>
        <CheckBox onClick={onTaskComplete}></CheckBox>
      </StyledCheckBoxWrapper>
      <Input onEditComplete={taskName} defaultValue={taskName}></Input>
      <StyledNameAndButtonWrapper>
        <StyledTaskName>{taskName}</StyledTaskName>
        <StyledEditButtonWrapper>
          <EditButton onEditButtonClick></EditButton>
        </StyledEditButtonWrapper>
      </StyledNameAndButtonWrapper>

      {/* (isEditing ? (<Input onEditComplete={taskName}></Input>):(<StyledNameButtonWrapper>
          <StyledTaskName>{taskName}</StyledTaskName>
          <StyledEditButtonWrapper>
            <EditButton onClick={onEditButtonClick()}></EditButton>
          </StyledEditButtonWrapper>
        </StyledNameButtonWrapper>)
      ) */}
      {/* if (isEditing == true) {
        <Input onEditComplete={taskName}></Input>
      } else {
        <StyledNameButtonWrapper>
          <StyledTaskName>{taskName}</StyledTaskName>
          <StyledEditButtonWrapper>
            <EditButton onClick={onEditButtonClick()}></EditButton>
          </StyledEditButtonWrapper>
        </StyledNameButtonWrapper>
      } */}
    </StyledWrapper>
  );
};

export default Task;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const StyledCheckBoxWrapper = styled.div`
  margin-right: 10px;
`;
const StyledNameAndButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const StyledTaskName = styled.div`
  text-align: center;
`;
const StyledEditButtonWrapper = styled.div``;
