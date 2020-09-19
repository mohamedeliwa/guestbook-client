import { Container, Media } from "react-bootstrap";
import Message from "../components/Message";

const Board = () => {
  return (
    <Container>
      <Message />
      <a href="/board">Board</a>
      <a href="/">Home</a>
    </Container>
  );
};

export default Board;
