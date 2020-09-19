import { Container, Media } from "react-bootstrap";
import Message from "../components/Message";
import NewMessageForm from "../components/NewMessageForm";
import styles from "../styles/Board.module.css";

const Board = () => {
  return (
    <Container className={styles.container}>
      <Message />
      <a href="/board">Board</a>
      <a href="/">Home</a>
      <NewMessageForm />
    </Container>
  );
};

export default Board;
