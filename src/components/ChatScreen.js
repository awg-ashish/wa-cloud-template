import { Avatar, IconButton } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Message from "../components/Message";
import { useRouter } from "next/router";
import styled from "styled-components";
import { InsertEmoticon } from "@mui/icons-material";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";
import { useRef, useState } from "react";
const ChatScreen = () => {
  const [input, setInput] = useState("");
  const endOfMessagesRef = useRef(null);
  const router = useRouter();
  //create a query for onSnapshot using router.query.id
  const showMessages = () => {
    //create a realtime connection to firebase here
    // if you get the messages return the message component
    return <Message user="abc" message="message_got_from_firebase" />;
    //else use the server side content
  };
  const ScrollToBottom = () => {
    endOfMessagesRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const sendMessage = (e) => {
    //send message function
    //use the router to generate the query
    e.preventDefault();
    setInput("");
  };
  return (
    <Container>
      <Header>
        <Avatar />
        <HeaderInformation>
          <h3>Recipient Email</h3>
          <p>Last seen...</p>
        </HeaderInformation>
        <HeaderIcons>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </HeaderIcons>
      </Header>
      <MessageContainer>
        {showMessages()}
        <EndOfMessage ref={endOfMessagesRef} />
      </MessageContainer>
      <InputContainer>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
        <IconButton>
          <InsertEmoticon />
        </IconButton>

        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <SendButton type="submit" onClick={sendMessage}>
          <SendIcon />
        </SendButton>
        <IconButton>
          <MicIcon />
        </IconButton>
      </InputContainer>
    </Container>
  );
};

export default ChatScreen;
const Container = styled.div``;
const SendButton = styled(IconButton)``;
const Input = styled.input`
  flex: 1;
  align-items: center;
  padding: 10px;
  position: sticky;
  bottom: 0;
  background-color: white;
  z-index: 100;
  outline: 0px;
  border: 1px solid #e5ded8;
  border-radius: 10px;
`;
const InputContainer = styled.form`
  display: flex;
  align-items: center;
  padding: 10px;
  position: sticky;
  bottom: 0;
  background-color: white;
  z-index: 100;
`;
const Header = styled.div`
  position: sticky;
  background-color: white;
  z-index: 100;
  display: flex;
  padding: 11px;
  height: 80px;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
`;
const HeaderInformation = styled.div`
  margin-left: 15px;
  flex: 1;
  > h3 {
    margin-bottom: 3px;
  }
  > p {
    font-size: 14px;
    color: gray;
  }
`;
const HeaderIcons = styled.div``;
const EndOfMessage = styled.div`
  margin-bottom: 50px;
`;
const MessageContainer = styled.div`
  padding: 30px;
  background-color: #e5ded8;
  min-height: 90vh;
`;
