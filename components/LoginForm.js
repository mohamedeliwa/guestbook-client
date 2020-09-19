import { Form, Button } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContext";
import styles from "../styles/LoginForm.module.css";

const LoginForm = () => {
  const router = useRouter();
  const { isAuthenticated, login } = useContext(AuthContext);
  const [state, setState] = useState({
    email: "test@test.com",
    password: "Test@0123456789",
  });
  useEffect(() => {
    if (isAuthenticated) router.push("/board");
  }, [isAuthenticated]);

  const handleChange = (e) => {
    e.preventDefault();
    switch (e.target.type) {
      case "email":
        setState({
          ...state,
          email: e.target.value,
        });
        break;
      case "password":
        setState({
          ...state,
          password: e.target.value,
        });
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(state);
  };
  return (
    <Form className={styles.form} onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control required type="email" placeholder="Enter email" onChange={handleChange} value={state.email}/>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control required type="password" placeholder="Password" onChange={handleChange} value={state.password}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>{" "}
      or
      <Link href="/signup">
        <a className={styles.a}>Sign up</a>
      </Link>
    </Form>
  );
};

export default LoginForm;
