import React from "react";
import styled from "styled-components";
import pencil from "../../../assets/svg/pencil.svg";
import COLOR from "../../../variables/color";

const SampleButton = (props) => {
  return (
    <Button onClick={props.onClick}>
      <Img src={pencil} />
    </Button>
  );
};

const Button = styled.button`
  background-color: transparent;
  border: none;
`;
const Img = styled.img`
  ${Img}:hover {
    background-color: ${COLOR.LIGHT_GRAY};
    opacity: 0.2;
    border-radius:50%;
`;

export default SampleButton;
