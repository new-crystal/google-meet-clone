import React, { useRef, useState } from "react";
import { db } from "../../../api/firebase";
import styled from "styled-components";
import { MdOutlineVideoCall } from "react-icons/md";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { nanoid } from "nanoid";
import { To, useNavigate } from "react-router-dom";

const MainBtn = () => {
  const [onFocused, setOnFocused] = useState<boolean>(false);
  const [join, setJoin] = useState<boolean>(false);
  const navigate: NavigateFunction = useNavigate();
  const id = nanoid();
  const inputRef = useRef<HTMLInputElement>(null);

  interface NavigateFunction {
    (to: To): void;
  }

  const onClickAddBtn = async () => {
    const data = {
      userId: "1",
      roomId: id,
    };
    await addDoc(collection(db, "meetting"), data);
    navigate(`/meet/${data.roomId}`);
  };

  const onClickJoinBtn = async () => {
    let dataId: string[] = [];
    const dataList = await getDocs(collection(db, "meetting"));
    dataList.forEach(data => {
      dataId.push(data.data().roomId);
    });
    dataId.map(id => {
      id === inputRef.current?.value ? navigate(`/join/${id}`) : setJoin(true);
    });
  };

  return (
    <Container>
      <CreateBtn onClick={() => onClickAddBtn()}>
        <MdOutlineVideoCall /> 새 회의
      </CreateBtn>
      <JoinInput
        placeholder="코드 또는 링크 입력"
        ref={inputRef}
        onKeyDown={() => {
          setOnFocused(true);
          setJoin(false);
        }}
      />
      <JoinBtn onClick={() => onClickJoinBtn()}>참여</JoinBtn>
      {join && <p>참여 코드를 다시 확인해주세요</p>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
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
`;
const JoinInput = styled.input`
  color: #3c4043;
  font-family: Roboto, Arial, sans-serif;
  font-size: 1rem;
  letter-spacing: 0.00625em;
  font-weight: 400;
  height: 3em;
  animation: 0.5s ease-in fadeIn 0s forwards;
  padding: 5px;
`;

const JoinBtn = styled.button`
  /* visibility: ${props => (props.disabled ? "visible" : "hidden")}; */
  margin-left: 20px;
`;

export default MainBtn;
