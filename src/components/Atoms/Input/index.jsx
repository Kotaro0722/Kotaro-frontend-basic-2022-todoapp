import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";

const Input = (onEditComplete, defaultValue) => {
  return <Box></Box>;
};

const Box = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 2px;
  color: ${COLOR.LIGHT_GRAY};
  ${Box}:focus {
    background-color: ${COLOR.BLACK};
  }
`;

export default Input;
