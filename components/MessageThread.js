import { Container, Media } from "react-bootstrap";
import styles from "../styles/MessageThread.module.css";
const Message = () => {
  return (
    <Container className="pt-5">
      <Media className={styles.messageCard}>
        <Media.Body>
          <h5 className={styles.username}>Jhone Deo</h5>
          <p className={styles.messageContent}>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </Media.Body>
      </Media>
      <hr />
      <Media className={styles.messageBox}>
        <Media.Body>
          <h5 className={styles.username}>Jhone Deo</h5>
          <p className={styles.messageContent}>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </Media.Body>
      </Media>
      <Media className={styles.messageBox}>
        <Media.Body>
          <h5 className={styles.username}>Jhone Deo</h5>
          <p className={styles.messageContent}>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </Media.Body>
      </Media>
      <Media className={styles.messageBox}>
        <Media.Body>
          <h5 className={styles.username}>Jhone Deo</h5>
          <p className={styles.messageContent}>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </Media.Body>
      </Media>
    </Container>
  );
};

export default Message;
