import React from "react";
import styled from "styled-components";
import { VscChromeClose } from "react-icons/vsc";

const Chat = () => {
  return (
    <STBoxChatRoom>
      <STChatHeader>
        <STHeaderText>회의 중 메시지</STHeaderText>
        <STHeaderCloseBox>
          <VscChromeClose style={{ width: "24px", height: "24px" }} />
        </STHeaderCloseBox>
      </STChatHeader>
    </STBoxChatRoom>
  );
};

const STBoxChatRoom = styled.div`
  border: 1px solid;
  background: var(--hotlane-background-color);
  border-left: 1px solid #f1f3f4;
  display: flex;
  flex-direction: column;
  height: 666px;
  opacity: 1;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  width: 360px;
  direction: ltr;
  font-family: "Roboto", arial, sans-serif;
  font-size: 0.75rem;
`;

const STChatHeader = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 4rem;
  min-height: 4rem;
  padding-left: 1.5rem;
`;

const STHeaderText = styled.div`
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
`;

const STHeaderCloseBox = styled.div`
  border-radius: 50%;
  :hover {
    background-color: #eee;
  }
`;
export default Chat;
