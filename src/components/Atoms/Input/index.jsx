import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";

const Input = (onEditComplete, defaultValue) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.value = defaultValue;
    () => inputRef.current.focus();
  }, []);
  return <StyledInput ref={inputRef}></StyledInput>;
};

const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 2px;
  color: ${COLOR.LIGHT_GRAY};
  ${StyledInput}:focus {
    background-color: ${COLOR.BLACK};
  }
`;

export default Input;
