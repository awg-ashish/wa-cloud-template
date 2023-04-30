import Head from "next/head";
import styled from "styled-components";
import Sidebar from "../../components/Sidebar";
import ChatScreen from "../../components/ChatScreen";
const Chat = (chat, messages) => {
  return (
    <Container>
      <Head>
        <title>Dynamic chats here</title>
      </Head>
      <Sidebar />
      <ChatContainer>
        <ChatScreen chat={chat} messages={messages} />
      </ChatContainer>
    </Container>
  );
};

export default Chat;
export const getServerSideProps = async (context) => {
  //we need to 1. prep the chat list and we need to 2. prep the messages
  //const ref = "query the messages"
  //prep the messages on the server
  //get the messages from the database
  //save it in an array or any variable say messages
  // .toDate() and .getTime()
  //now we need to prep the chat list
  //again make a ref to chat list
  //save it in the variable say chat
  //now lets return the chats and the messages, they can be used as props in this page
  return {
    props: {
      messages: "Dummy message",
      chat: "chat",
    },
  };
};
const Container = styled.div`
  display: flex;
`;
const ChatContainer = styled.div`
  flex: 1;
  overflow: scroll;
  height: 100vh;
  ::webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
