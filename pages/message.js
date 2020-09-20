import { Container, Media } from "react-bootstrap";
import MessageThread from "../components/MessageThread";
import NewReplyForm from "../components/NewReplyForm";
import styles from "../styles/Board.module.css";
import Navbar from "../components/Navbar";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import {AuthContext} from "../context/AuthContext";


const Message = () => {
  const router = useRouter();
  const { isAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    if (isAuthenticated === false) router.push("/");
  }, [isAuthenticated]);
  return (
    <Container className={styles.container}>
      <Navbar />
      {isAuthenticated ? <MessageThread messageID={router.query.id}/> : null}
      <NewReplyForm />
    </Container>
  );
};

export default Message;
