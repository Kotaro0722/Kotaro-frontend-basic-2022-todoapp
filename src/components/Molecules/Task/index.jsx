import React, { useState } from "react";
import styled from "styled-components";
import CheckBox from "../../Atoms/Checkbox/index.jsx";
import Input from "../../Atoms/Input/index.jsx";
import EditButton from "../../Atoms/EditButton/index";
import COLOR from "../../../variables/color.js";

const Task = ({ onTaskChange, onTaskComplete, taskName, defaultIsEditing }) => {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);
  const onEditComplete = (value) => {
    setIsEditing(false);
    () => onTaskChange(value);
    console.log(value);
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
      {isEditing ? (
        <Input
          onEditComplete={() => onEditComplete(taskName)}
          defaultValue={taskName}
        />
      ) : (
        <StyledNameAndButtonWrapper>
          <StyledTaskName>{taskName}</StyledTaskName>
          <StyledEditButtonWrapper>
            <EditButton onClick={onEditButtonClick}></EditButton>
          </StyledEditButtonWrapper>
        </StyledNameAndButtonWrapper>
      )}
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
  color: ${COLOR.LIGHT_GRAY};
`;
const StyledEditButtonWrapper = styled.div``;
