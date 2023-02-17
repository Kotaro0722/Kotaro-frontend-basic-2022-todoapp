import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Title = () => {
  return (
    <div>
      <StyledTextWide>SIMPLE TODO APP</StyledTextWide>
      <StyledTextNarrow>SIMPLE TODO APP</StyledTextNarrow>
    </div>
  );
};
export default Title;

const StyledTextWide = styled.div`
  color: ${COLOR.WHITE};
  ${TEXT.L}
`;
const StyledTextNarrow = styled.div`
  color: ${COLOR.WHITE};
  ${TEXT.M}
`;
