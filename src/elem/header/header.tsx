import React from "react"
import styled from "styled-components"
import HeaderBtn from "./HeaderBtn"
import HeaderTime from "./HeaderTime"

const Header = () => {
  return (
    <Container>
      <ImgBox>
        <LogoImg src="https://res.cloudinary.com/softwarepundit/image/upload/c_lfill/dpr_1.0/f_auto/h_800/q_auto/w_800/v1/software/google-meet-logo" />
      </ImgBox>
      <TimeBtnBox>
        <HeaderTime />
        <HeaderBtn />
      </TimeBtnBox>
      <LoginBtn></LoginBtn>
    </Container>
  )
}

const Container = styled.div`
  background-color: aliceblue;
  justify-content: space-between;
  display: flex;
  max-width: 100%;
  height: 64px;
  @media screen {
    min-width: 600px;
  }
`
const ImgBox = styled.div`
  background-color: aqua;
  width: 40vw;
  padding-right: 30px;
  margin-left: 20px;
`

const LogoImg = styled.img`
  width: 190px;
  height: 65px;
`

const TimeBtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-size: 18px;
`

const LoginBtn = styled.div``
export default Header
