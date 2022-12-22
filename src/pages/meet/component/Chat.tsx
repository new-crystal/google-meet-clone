import React from "react";
import styled from "styled-components";

const Chat = () => {
  return <STBoxChatRoom></STBoxChatRoom>;
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
export default Chat;
