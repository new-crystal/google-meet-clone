import { async } from "@firebase/util";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../../../api/firebase";

const ChatBody = () => {
  const [chatData, setChatData] = useState([
    { chatTime: "오후 4:58", content: "ddddd", userNick: "susu" },
  ]);

  interface Chat {
    chatTime: string;
    content: string;
    userNick: string;
  }

  interface ChatData extends Array<Chat> {}

  const getChatList = async () => {
    const chatList = await getDocs(collection(db, "chat"));
    chatList.forEach((chat): void => {
      console.log(chat.data());
    });
  };

  useEffect(() => {
    getChatList();
  }, []);

  return (
    <STChatBodyBox>
      <STChat>
        <STChatNickTimeBox>
          <STChatNick></STChatNick>
          <STChatTime></STChatTime>
        </STChatNickTimeBox>
        <STChatContent></STChatContent>
      </STChat>
    </STChatBodyBox>
  );
};

const STChatBodyBox = styled.div`
  box-sizing: border-box;
  flex: 1;
  min-height: 2.25rem;
  overflow-y: auto;
  padding-bottom: 0.5rem;
  -webkit-user-select: text;
  width: 100%;
  text-align: left;
  direction: ltr;
  font-family: "Roboto", arial, sans-serif;
  font-size: 0.75rem;
`;

const STChat = styled.div`
  display: flex;
  padding: 0.75rem 1.5rem 0.875rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const STChatNickTimeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
const STChatNick = styled.div`
  color: #202124;
  display: inline-block;
  float: left;
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1.25;
  padding-bottom: 0.1875rem;
  padding-top: 0.25rem;
  padding-right: 0.5rem;
  word-wrap: break-word;
`;
const STChatTime = styled.div`
  color: #5f6368;
  display: inline-block;
  float: left;
  font-size: 0.75rem;
  line-height: 1.5;
  padding-top: 0.1875rem;
`;
const STChatContent = styled.div`
  clear: both;
  max-width: 100%;
  color: #202124;
  font-size: 0.8125rem;
  line-height: 1.25rem;
  padding-top: 0.625rem;
  white-space: pre-wrap;
  word-wrap: break-word;
`;
export default ChatBody;
