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
      {/* <Input onEditComplete={taskName} defaultValue={taskName}></Input>;
      <StyledNameButtonWrapper>
        <StyledTaskName>{taskName}</StyledTaskName>
        <StyledEditButtonWrapper>
          <EditButton onEditButtonClick></EditButton>
        </StyledEditButtonWrapper>
      </StyledNameButtonWrapper> */}
      {(() => {
        if (isEditing == true) {
          <Input onEditComplete={taskName}></Input>;
        } else {
          <StyledNameButtonWrapper>
            <StyledTaskName>{taskName}</StyledTaskName>
            <StyledEditButtonWrapper>
              <EditButton onClick={onEditButtonClick()}></EditButton>
            </StyledEditButtonWrapper>
          </StyledNameButtonWrapper>;
        }
      })()}
    </StyledWrapper>
  );
};

export default Task;

const StyledWrapper = styled.div`
  display: flex;
`;
const StyledCheckBoxWrapper = styled.div``;
const StyledNameButtonWrapper = styled.div``;
const StyledTaskName = styled.div``;
const StyledEditButtonWrapper = styled.div``;
