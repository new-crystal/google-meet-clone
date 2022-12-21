import React from 'react'
import styled from "styled-components";
import { IoMicOffOutline, IoMicOutline, IoVideocamOffOutline, IoVideocamOutline } from "react-icons/io5";


const JoinNotLogIn: React.FC = () => {
    return (
        <Container>
            <Head>
                <ImgBox>
                    <LogoImg src="https://res.cloudinary.com/softwarepundit/image/upload/c_lfill/dpr_1.0/f_auto/h_800/q_auto/w_800/v1/software/google-meet-logo" />
                </ImgBox>
                <ToLogIn>
                    로그인
                </ToLogIn>
            </Head>

            
            <Body>
                <CameraArea>
                    <Text>
                        카메라가 꺼져 있음
                    </Text>
                    <Icon>
                        <Mic>
                            <IoMicOutline color='red' size='22'/>
                            <IoMicOffOutline color='red' size='22'/>
                        </Mic>
                        <Cam>
                            <IoVideocamOutline color='red' size='22'/>
                            <IoVideocamOffOutline color='red' size='22'/>
                        </Cam>
                    </Icon>
                </CameraArea>
                <Box>
                    <div>
                        이름이 무엇인가요?
                    </div>
                    <Input placeholder='이름'></Input>
                    <JoinBtn>
                        참여요청
                    </JoinBtn>
                </Box>
            </Body>
        </Container>
    )
}
export default JoinNotLogIn;
const Container = styled.div`
    
`
const Head = styled.div`
    display: flex;
    justify-content: space-between;
`
const ImgBox = styled.div`
  width: 40vw;
  padding-right: 30px;
  margin-left: 20px;
`

const LogoImg = styled.img`
  width: 190px;
  height: 65px;
`

const ToLogIn = styled.button`
    color: rgb(55, 55, 251);
    font-size: medium;
    padding: 20px;
`

const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
`


const Box = styled.div`
    width: 400px;
    height: 400px;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    //position: absolute;
    //background-color: #444482;
    font-weight: 350;
    font-size: 20px;
    color: #2a2a2a;
`

const Input = styled.input`
    outline: 0;
    background: #f2f2f2;;
    width: 300px;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    border-radius: 2px;
    margin-top: 20px;
`
const JoinBtn = styled.button`
    outline: 0;
    background: #f2f2f2;;
    width: 90px;
    height: 45px;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    border-radius: 30px;
    color: #2a2a2a;
`
const CameraArea = styled.div`
    height: 400px;
    width: 600px;
    background-color: #222222;
    color: white;
    border-radius: 9px;
    //display: center;
    //justify-content: center;
    align-items: center;
    
    //margin: auto;
    //text-align: center;
    /* justify-content: center;
    text-align: center;
    align-items: center; */
`
const Text = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
`
const Icon = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
`
const Mic = styled.button`
   
`

const Cam = styled.button`
    
`
