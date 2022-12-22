import styled from "styled-components";

const ChatBody = () => {
  return <STChatBodyBox></STChatBodyBox>;
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
export default ChatBody;
