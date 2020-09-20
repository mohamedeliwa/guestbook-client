import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Media } from "react-bootstrap";
import styles from "../styles/Message.module.css";

const Message = () => {
  const router = useRouter();
  const [state, setState] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        // end-point for reading profile info
        const url = "http://localhost:5000/messages";
        const response = await fetch(url, { credentials: "include" });
        if (response.status === 200) {
          setState(await response.json());
        } else {
          throw new Error("failed to load message, please try again later!");
          alert("failed to load message, please try again later!");
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  const messages = state.reverse().map((message) => {
    return (
      <Link href={`/message?id=${message._id}`} key={message._id}>
        <Media className={styles.messageBox}>
          <Media.Body>
            <h5 className={styles.username}>{message.owner.firstName + " " + message.owner.lastName}</h5>
            <p className={styles.messageContent}>
              {message.content}
            </p>
          </Media.Body>
        </Media>
      </Link>
    );
  });
  return (
    <Container className="pt-5">
      {messages}
    </Container>
  );
};

export default Message;
