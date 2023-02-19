import React from "react";
import check from "../../../assets/svg/check.svg";
import styled from "styled-components";
import COLOR from "../../../variables/color";

const Checkbox = (props) => {
  return (
    <Box onClick={props.onClick}>
      <Check src={check} />
    </Box>
  );
};
const Check = styled.img`
  display: none;
  width: 16px;
  height: 16px;
`;

const Box = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${COLOR.LIGHT_GRAY};
  border-radius: 2px;
  cursor: pointer;
  &:hover ${Check} {
    display: block;
  }
`;

export default Checkbox;
