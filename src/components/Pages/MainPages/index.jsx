import React from "react";
import Title from "../../Atoms/Title/index.jsx";
import TodoCard from "../../Organisms/TodoCard";
import styled from "styled-components";

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
  gap: 25px;
`;

export default Page;
