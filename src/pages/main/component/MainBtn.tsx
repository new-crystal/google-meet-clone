import React, { useState } from "react"
import styled from "styled-components"
import { MdOutlineVideoCall } from "react-icons/md"

const MainBtn = () => {
  const [onFocused, setOnFocused] = useState<boolean>(false)

  return (
    <Container>
      <CreateBtn>
        <MdOutlineVideoCall /> 새 회의
      </CreateBtn>
      <JoinInput
        placeholder="코드 또는 링크 입력"
        onKeyDown={() => {
          setOnFocused(true)
        }}
      />
      <JoinBtn view={onFocused}>참여</JoinBtn>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const CreateBtn = styled.button`
  margin-bottom: 1em;
  margin-right: 1.5em;
  background-color: #1a73e8;
  color: #fff;
  padding: 0 16px 0 12px;
  font-size: 1rem;
  height: 3em;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  border-radius: 4px;
`
const JoinInput = styled.input`
  color: #3c4043;
  font-family: Roboto, Arial, sans-serif;
  font-size: 1rem;
  letter-spacing: 0.00625em;
  font-weight: 400;
  height: 3em;
  animation: 0.5s ease-in fadeIn 0s forwards;
  padding: 5px;
`

const JoinBtn = styled.button<{ view: boolean }>`
  visibility: ${props => (props.view ? "visible" : "hidden")};
  margin-left: 20px;
`

export default MainBtn
