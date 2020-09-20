import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContext";
import styles from "../styles/NewMessageForm.module.css";
import { Form, Button, Col, InputGroup, FormControl } from "react-bootstrap";

const NewMessageForm = () => {
  const router = useRouter();
  const { user, isAuthenticated } = useContext(AuthContext);
  const [state, setState] = useState({
    content: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case "content":
        setState({
          ...state,
          content: e.target.value,
        });
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:5000/messages`;
      const response = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: state.content,
        }),
      });
      if(response.status == 201){
        router.reload();
      }else{
        throw new Error("creating message failed!")
      }
    } catch (error) {
      console.log("error: ", error.message);
    }
  };

  return (
    <footer className={styles.footer}>
      <Form className={styles.form} onSubmit={handleSubmit}>
        <Form.Row className="align-items-center">
          <Col xs="auto">
            <Form.Control
              className={styles.messageInputArea}
              id="content"
              placeholder="New message"
              value={state.content}
              onChange={handleChange}
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

export default NewMessageForm;
