import { Container, Media } from "react-bootstrap";
import MessageThread from "../components/MessageThread";
import NewReplyForm from "../components/NewReplyForm";
import styles from "../styles/Board.module.css";

const Message = () => {
  return (
    <Container className={styles.container}>
      <MessageThread />
      <a href="/board">Board</a>
      <a href="/">Home</a>
      <a href="/message">Message</a>
      <NewReplyForm />
    </Container>
  );
};

export default Message;
