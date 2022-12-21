import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";

const MainImg: React.FC = () => {
  return (
    <Container>
      <ImgBox>
        <ImgSlider />
      </ImgBox>
    </Container>
  );
};
const Container = styled.div`
  display: inline-flex;
  flex-basis: 35rem;
  flex-direction: column;
  flex-shrink: 1;
  max-width: 35rem;
  padding: 1em 3em;
  align-items: center;
  text-align: center;
  padding: 1rem 3%;
  flex-basis: auto;
  width: 100%;
  max-width: 39rem;

  /* @media screen {
    max-aspect-ratio: 3 / 4;
    min-height: 32rem;
    max-width: 60rem;
    min-height: 32rem;
  } */
  /* align-items: center;
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
  } */
`;

const ImgBox = styled.div`
  width: 52rem;
  //max-width: 52rem;
  height: 100%;
`;
export default MainImg;
