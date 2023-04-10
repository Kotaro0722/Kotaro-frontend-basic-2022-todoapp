import styled from "styled-components";

const Alert = (isActive) => {
  return <AlertComponent isActive={isActive}></AlertComponent>;
};

const AlertComponent = styled.div`
  display: ${(props) => (props.isActive ? "block" : "none")};
`;
