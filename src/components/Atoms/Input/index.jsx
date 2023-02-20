import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";

const Input = (onEditComplete, defaultValue) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current = defaultValue;
  });
  return <styledInput ref={inputRef}>{inputRef.current}</styledInput>;
};

const styledInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 2px;
  color: ${COLOR.LIGHT_GRAY};
  ${styledInput}:focus {
    background-color: ${COLOR.BLACK};
  }
`;

export default Input;
