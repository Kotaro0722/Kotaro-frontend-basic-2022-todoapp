import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";

const Input = ({ onEditComplete, defaultValue }) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.value = defaultValue;
    inputRef.current.focus();
    inputRef.current.addEventListener(
      "blur",
      () => {
        if (!inputRef.current) {
          return;
        }
        onEditComplete(inputRef.current.value);
      },
      false
    );
    inputRef.current.addEventListener(
      "keydown",
      (key) => {
        if (key.key === "Enter") {
          if (!inputRef.current) {
            return;
          }
          onEditComplete(inputRef.current.value);
        }
      },
      false
    );
  }, []);
  return <StyledInput ref={inputRef}></StyledInput>;
};

const StyledInput = styled.input`
  background-color: ${COLOR.BLACK};
  width: 418px;
  border: none;
  outline: none;
  border-radius: 2px;
  color: ${COLOR.LIGHT_GRAY};
  padding-left: 4px;
  ${TEXT.S}
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    width: 198px;
  }
`;

export default Input;
