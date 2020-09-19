import styles from "../styles/NewMessageForm.module.css";
import { Form, Button, Col, InputGroup, FormControl } from "react-bootstrap";

const NewReplyForm = () => {
  return (
    <footer className={styles.footer}>
      <Form className={styles.form}>
        <Form.Row className="align-items-center">
          <Col xs="auto">
            <Form.Control
              className={styles.messageInputArea}
              id="inlineFormInput"
              placeholder="New reply"
            />
          </Col>

          <Col xs="auto">
            <Button type="submit" /*className={styles.messageInputBtn}*/>
              Submit
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </footer>
  );
};

export default NewReplyForm;
