import styled from "styled-components";
import COLOR from "../../../variables/color";
import React from "react";
import BREAKPOINT from "../../../variables/breakpoint";

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
  position: absolute;
  top: 80px;
  right: 0px;
  left: 0px;
  margin: auto;
  @media screen and(min-width:${BREAKPOINT.MEDIUM}) {
    width: 280px;
  } ;
`;

export default Alert;
