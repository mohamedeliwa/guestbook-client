import { Container, Media } from "react-bootstrap";
import Message from "../components/Message";
import Navbar from "../components/Navbar";
import NewMessageForm from "../components/NewMessageForm";
import styles from "../styles/Board.module.css";

const Board = () => {
  return (
    <Container className={styles.container}>
      <Navbar />
      <Message />
      <NewMessageForm />
    </Container>
  );
};

export default Board;
