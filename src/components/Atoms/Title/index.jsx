import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";
import FONTFAMILY from "../../../variables/font_family";

const Title = () => {
  return <StyledText>SIMPLE TODO APP</StyledText>;
};
export default Title;

const StyledText = styled.div`
  color: ${COLOR.WHITE};
  ${TEXT.M}
  font-family: ${FONTFAMILY.ROBOTO};
  @media (min-width: ${BREAKPOINT.MEDIUM}) {
    ${TEXT.L}
  }
`;
