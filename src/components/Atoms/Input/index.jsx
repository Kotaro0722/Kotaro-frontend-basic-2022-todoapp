import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";

const Input = (onEditComplete, defaultValue) => {
  const inputRef = useRef();
  let focusOutEvent = function () {};
  let keyPressEvent = function () {};
  useEffect(() => {
    defaultValue = "";
    inputRef.current.value = defaultValue;
    () => inputRef.current.focus();
    focusOutEvent = () => {
      onEditComplete(inputRef.current.value);
      console.log("a");
    };
    keyPressEvent = ({ key, value }) => {
      if (key.key == "Enter") {
        onEditComplete(value);
      }
    };
  }, []);
  return (
    <StyledInput
      ref={inputRef}
      onFocus={focusOutEvent()}
      onKeyPress={(e) => keyPressEvent(e, inputRef.current.value)}
    ></StyledInput>
  );
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
