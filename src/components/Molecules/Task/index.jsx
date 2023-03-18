import React, { useState } from "react";
import styled from "styled-components";
import CheckBox from "../../Atoms/Checkbox/index.jsx";
import Input from "../../Atoms/Input/index.jsx";
import EditButton from "../../Atoms/EditButton/index";
import COLOR from "../../../variables/color.js";

const Task = ({ onTaskChange, onTaskComplete, taskName, defaultIsEditing }) => {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);
  const [editTaskName, setEditTaskName] = useState(taskName);
  const onEditComplete = (value) => {
    setEditTaskName(value);
    setIsEditing(false);
    onTaskChange(value);
    console.log(taskName);
  };
  const onEditButtonClick = () => {
    setIsEditing(true);
  };
  return (
    <StyledWrapper>
      <StyledCheckBoxWrapper>
        <CheckBox onClick={onTaskComplete}></CheckBox>
      </StyledCheckBoxWrapper>
      {isEditing ? (
        <StyledInputWrapper>
          <Input
            onEditComplete={(value) => onEditComplete(value)}
            defaultValue={editTaskName}
          />
        </StyledInputWrapper>
      ) : (
        <StyledNameAndButtonWrapper>
          <StyledTaskName>{editTaskName}</StyledTaskName>
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
  position: absolute;
`;
const StyledInputWrapper = styled.div`
  position: relative;
  left: 26px;
`;
const StyledNameAndButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const StyledTaskName = styled.div`
  text-align: center;
  color: ${COLOR.LIGHT_GRAY};
  position: relative;
  left: 26px;
`;
const StyledEditButtonWrapper = styled.div`
  position: relative;
  left: 200px;
`;
