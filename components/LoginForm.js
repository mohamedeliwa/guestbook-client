import { Form, Button } from "react-bootstrap";
import Link from "next/link";
import styles from "../styles/LoginForm.module.css";

const LoginForm = () => {
  return (
    <Form className={styles.form}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button> or
      <Link href="/signup"><a className={styles.a}>Sign up</a></Link>
    </Form>
  );
};

export default LoginForm;
