import React from "react";
import styled from "styled-components";

const MainImg: React.FC = () => {
  return (
    <Container>
      <ImgBox></ImgBox>
    </Container>
  );
};
const Container = styled.div`
  align-items: center;
  display: -webkit-inline-box;
  display: inline-flex;
  flex-direction: column;
  flex-basis: 45%;
  overflow: hidden;
  padding: 1em 3em;
  @media screen {
    max-aspect-ratio: 3 / 4;
    min-height: 32rem;
    max-width: 60rem;
    min-height: 32rem;
    align-items: flex-start;
    box-sizing: border-box;
    overflow-y: auto;
    padding: 1rem 3%;
  }
`;

const ImgBox = styled.div`
  width: 100%;
  max-width: 52rem;
  height: 100%;
`;
export default MainImg;
