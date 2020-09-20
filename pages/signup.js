import { Form, Button } from "react-bootstrap";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/LoginForm.module.css";
import { AuthContext } from "../context/AuthContext";
const Signup = () => {
  const router = useRouter();
  const [state, setState] = useState({
    firstName: "test",
    lastName: "test",
    password: "Test@0123456789",
    email: "test@test.com",
  });
  const { isAuthenticated, signup } = useContext(AuthContext);
  useEffect(() => {
    if (isAuthenticated) router.push("/board");
  }, [isAuthenticated]);

  const handleChange = (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case "firstName":
        setState({
          ...state,
          firstName: e.target.value,
        });
        break;
      case "lastName":
        setState({
          ...state,
          lastName: e.target.value,
        });
        break;
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
    signup(state);
  };
  return (
    <div className={styles.signupPage}>
      <Form className={styles.form} onSubmit={handleSubmit}>
        <Form.Group controlId="firstName">
          <Form.Control required type="text" placeholder="First name" value={state.firstName} onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Control required type="text" placeholder="Last name" value={state.lastName} onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Control required type="email" placeholder="Enter email" value={state.email} onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Control required type="password" placeholder="Password" value={state.password} onChange={handleChange}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>{" "}
        or
        <Link href="/">
          <a className={styles.a}>Login</a>
        </Link>
      </Form>
    </div>
  );
};

export default Signup;
