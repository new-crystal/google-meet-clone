import React from 'react'
import styled from "styled-components";
import { IoMicCircle } from "react-icons/io5";

const Join: React.FC = () => {
    return (
        <Container>
            <ImgBox>
                <LogoImg src="https://res.cloudinary.com/softwarepundit/image/upload/c_lfill/dpr_1.0/f_auto/h_800/q_auto/w_800/v1/software/google-meet-logo" />
            </ImgBox>
            <CameraArea>
                카메라가 꺼져 있음
                <Mic>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                    <IoMicCircle />
                </Mic>
                <Cam>
                    
                </Cam>
            </CameraArea>
            <Box>
                이름이 무엇인가요?
                {/* <input>
                    이름
                </input> */}
                <JoinBtn>

                </JoinBtn>
            </Box>
        </Container>
    )
}
export default Join;

const ImgBox = styled.div`
  background-color: aqua;
  width: 40vw;
  padding-right: 30px;
  margin-left: 20px;
`;

const LogoImg = styled.img`
  width: 190px;
  height: 65px;
`;

const Container = styled.div`
    
`
const Box = styled.div`
    
`
const JoinBtn = styled.button`
    
`
const CameraArea = styled.div`
    height: 400px;
    
`
const Mic = styled.button`
    
`

const Cam = styled.button`
    
`
