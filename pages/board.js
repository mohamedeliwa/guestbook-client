import { Container } from "react-bootstrap";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Message from "../components/Message";
import Navbar from "../components/Navbar";
import NewMessageForm from "../components/NewMessageForm";
import styles from "../styles/Board.module.css";
import {AuthContext} from "../context/AuthContext";

const Board = () => {
  const router = useRouter();
  const { isAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated]);
  return (
    <Container className={styles.container}>
      <Navbar />
      <Message />
      <NewMessageForm />
    </Container>
  );
};

export default Board;
