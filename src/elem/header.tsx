import React from "react";
import styled from "styled-components";
import FontAwesomeIcon from "@fortawesome/fontawesome-svg-core";

const Header = () => {
  const timeList = new Date().toLocaleTimeString().split(":");
  const time = `${timeList[0]}:${timeList[1]}`;
  const dateList = new Date().toLocaleDateString("ko-KR").split(" ");
  const date = `${dateList[1].split(".")[0]}월 ${dateList[2].split(".")[0]}일`;
  const dayList = ["일", "월", "화", "수", "목", "금", "토"];
  const dayIndex = new Date().getDay();

  return (
    <Container>
      <ImgBox>
        <LogoImg src="https://res.cloudinary.com/softwarepundit/image/upload/c_lfill/dpr_1.0/f_auto/h_800/q_auto/w_800/v1/software/google-meet-logo" />
      </ImgBox>
      <TimeBtn>
        <span>{time}</span>
        <span>•</span>
        <span>
          {date} ({dayList[dayIndex]})
        </span>
        <Button>
          <FontAwesomeIcon icon="fa-regular fa-circle-question" />
        </Button>
        <Button></Button>
        <Button></Button>
      </TimeBtn>
      <LoginBtn></LoginBtn>
    </Container>
  );
};

const Container = styled.div`
  background-color: aliceblue;
  justify-content: space-between;
  display: flex;
  max-width: 100%;
  height: 64px;
  @media screen {
    min-width: 600px;
  }
`;
const ImgBox = styled.div`
  background-color: aqua;
  width: 30%;
  padding-right: 30px;
  margin-left: 20px;
`;

const LogoImg = styled.img`
  width: 190px;
  height: 65px;
`;

const TimeBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-size: 18px;
`;
const Button = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: transparent;
  outline: none;
  border: 0px;
`;
const LoginBtn = styled.div``;
export default Header;
