import styled from "styled-components";
import COLOR from "../../../variables/color";
import React from "react";

const Alert = (props) => {
  return (
    <AlertComponent isActive={props.isActive}>
      {props.errorMessage}
    </AlertComponent>
  );
};

const AlertComponent = styled.div`
  display: ${(props) => {
    return props.isActive ? "block" : "none";
  }};
  padding: 10px 20px;
  gap: 10px;
  width: 400px;
  height: 40px;
  background-color: ${COLOR.RED};
  color: ${COLOR.WHITE};
  font-size: 14px;
  border-radius: 4px;
`;

export default Alert;
