import { Container, Media } from "react-bootstrap";
import styles from "../styles/Message.module.css";

const Message = () => {
  return (
    <Container>
      <Media>
        <Media.Body>
          <h5>Media Heading</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
          <Media>
            <Media.Body>
              <h5>Media Heading</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>
        </Media.Body>
      </Media>
    </Container>
  );
};

export default Message;
