import { Container, Media } from "react-bootstrap";
import MessageThread from "../components/MessageThread";
import NewReplyForm from "../components/NewReplyForm";
import styles from "../styles/Board.module.css";
import Navbar from "../components/Navbar";


const Message = () => {
  return (
    <Container className={styles.container}>
      <Navbar />
      <MessageThread />
      <NewReplyForm />
    </Container>
  );
};

export default Message;
