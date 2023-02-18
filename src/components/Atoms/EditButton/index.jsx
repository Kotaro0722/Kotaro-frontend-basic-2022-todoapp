import React from "react";
import styled from "styled-components";
import pencil from "../../../assets/svg/pencil.svg";
import COLOR from "../../../variables/color";

const SampleButton = (props) => {
  return (
    <Button onClick={props.onClick}>
      <Circle></Circle>
      <Img src={pencil} />
    </Button>
  );
};

const Button = styled.button`
  background-color: transparent;
  border: none;
`;
const Img = styled.img`
  color: ${COLOR.LIGHT_GRAY};
`;
const Circle = styled.div`
  ${Circle}:hover {
    background-color: ${COLOR.LIGHT_GRAY};
    width: 25px;
    height: 25px;
    opacity: 0.2;
    border-radius: 50%;
    position: absolute;
    left: 21px;
  }
  ${Circle} {
    width: 25px;
    height: 25px;
    position: absolute;
    left: 21px;
    background-color: transparent;
  }
`;

export default SampleButton;
