import { Avatar } from "@mui/material";
import { useRouter } from "next/router";
import styled from "styled-components";

function Chat({ id, user }) {
  const router = useRouter();
  const enterChat = () => {
    router.push(`/chat/${id}`);
  };
  return (
    <Container onClick={enterChat}>
      <UserAvatar />
      <p>+919430201667</p>
    </Container>
  );
}

export default Chat;
const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  :hover {
    background-color: #e9eaeb;
  }
`;
const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
