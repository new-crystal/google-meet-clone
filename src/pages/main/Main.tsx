import React from "react";
import Header from "../../elem/header/header";
import styled from "styled-components";
import MainLink from "./component/mainLink";
import MainImg from "./component/mainImg";

const Main = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <MainBox>
          <MainLink />
          <MainImg />
        </MainBox>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  height: calc(100vh - 4rem);
  min-height: 100%;
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
  font-size: 1rem;
  animation: 0.5s ease-in fadeIn 0s forwards;

  @media screen {
    height: calc(100vh - 3.5rem);
    max-aspect-ratio: 3 / 4;
    max-width: 60rem;
  }
`;
const MainBox = styled.div`
  align-items: center;
  display: -webkit-inline-box;
  display: inline-flex;
  justify-content: space-evenly;
  min-height: 100%;
  width: 100vw;
`;
export default Main;
