import { Container, Media } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/MessageThread.module.css";

const Message = (props) => {
  const router = useRouter();
  const [state, setState] = useState({
    message: false,
  });
  useEffect(() => {
    (async () => {
      try {
        // end-point for reading profile info
        const url = `http://localhost:5000/messages/${props.messageID}`;
        const response = await fetch(url, { credentials: "include" });
        if (response.status === 200) {
          const message = await response.json();
          setState({
            ...state,
            message,
          });
        } else {
          throw new Error("failed to load message, please try again later!");
          alert("failed to load message, please try again later!");
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  const message = !state.message ? null : (
    <Media className={styles.messageCard}>
      <Media.Body>
        <h5 className={styles.username}>
          {state.message.owner.firstName + " " + state.message.owner.lastName}
        </h5>
        <p className={styles.messageContent}>{state.message.content}</p>
      </Media.Body>
    </Media>
  );

  const replies = state.message
    ? state.message.replies.map((reply) => {
        console.log(state.message);
        return (
          <Media className={styles.messageBox} key={reply._id}>
            <Media.Body>
              <h5 className={styles.username}>{reply.owner.firstName + " " + reply.owner.lastName}</h5>
              <p className={styles.messageContent}>{reply.content}</p>
            </Media.Body>
          </Media>
        );
      })
    : null;
  return (
    <Container className="pt-5">
      <Link href="/board">
        <a className={styles.backbtn}>Back</a>
      </Link>
      {message}
      <hr />
      {replies}
    </Container>
  );
};

export default Message;
