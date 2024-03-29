import React from "react";
import Title from "../../Atoms/Title/index.jsx";
import TodoCard from "../../Organisms/TodoCard";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint.js";

const Page = () => {
  return (
    <PageWrapper>
      <Title />
      <TodoCard />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 60px;
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    margin-top: 20px;
  }
`;

export default Page;
