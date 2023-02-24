import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";

const Input = (onEditComplete, defaultValue) => {
  const inputRef = useRef();
  const FocusOutEvent = function (props) {
    () => onEditComplete(props);
  };
  const keyPressEvent = function ({ key, value }) {
    if (key.key == "Enter") {
      onEditComplete(value);
      console.log("a");
    }
  };
  useEffect(() => {
    inputRef.current.value = defaultValue;
    inputRef.current.focus();
    FocusOutEvent(inputRef.current.value);
  }, []);
  return (
    <StyledInput
      ref={inputRef}
      onFocus={FocusOutEvent()}
      onKeyPress={(e) => keyPressEvent(e, inputRef.current.value)}
    ></StyledInput>
  );
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
