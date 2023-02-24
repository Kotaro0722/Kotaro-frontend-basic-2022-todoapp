import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";

const Input = ({ onEditComplete, defaultValue }) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.value = defaultValue;
    inputRef.current.focus();
    inputRef.current.addEventListener(
      "blur",
      onEditComplete(inputRef.current.value),
      false
    );
    inputRef.current.addEventListener(
      "keydown",
      (key) => {
        if (key.key === "Enter") {
          onEditComplete(inputRef.current.value);
        }
      },
      false
    );
  }, []);
  return <StyledInput ref={inputRef} value=""></StyledInput>;
};

const StyledInput = styled.input`
  background-color: ${COLOR.BLACK};
  border: solid ${COLOR.BLACK};
  outline: none;
  border-radius: 2px;
  color: ${COLOR.LIGHT_GRAY};
  padding-left: 4px;
`;

export default Input;
