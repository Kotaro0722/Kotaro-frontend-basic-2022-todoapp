import React from "react";
import plus from "../../../assets/svg/plus.svg";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const AddTaskButton = (props) => {
  return (
    <Wrapper onClick={props.onClick}>
      <Img src={plus} />
      <Text>タスクを追加</Text>
      <Rectangle />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  width: 126px;
  gap: 10px;
  padding: 2px 6px;
  ${TEXT.S};
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Img = styled.img`
  width: fit-content;
  height: 20px;
`;

const Text = styled.div`
  color: ${COLOR.GREEN};
`;

const Rectangle = styled.div`
  position: absolute;
  left: 17px;
  top: 16px;
  width: 126px;
  height: 24px;
  padding: 2px 6px;
  &:hover {
    background-color: ${COLOR.GREEN};
    opacity: 0.2;
    border-radius: 12px;
  }
`;

export default AddTaskButton;
