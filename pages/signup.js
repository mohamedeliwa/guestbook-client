import { Form, Button } from "react-bootstrap";
import Link from "next/link";

import styles from "../styles/LoginForm.module.css";

const Signup = () => {
  return (
    <div className={styles.signupPage}>
      <Form className={styles.form}>
        <Form.Group>
          <Form.Control required type="text" placeholder="First name" />
        </Form.Group>
        <Form.Group>
          <Form.Control required type="text" placeholder="Last name" />
        </Form.Group>
        <Form.Group>
          <Form.Control required type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group c>
          <Form.Control required type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button> or
        <Link href="/"><a className={styles.a}>Login</a></Link>
      </Form>
    </div>
  );
};

export default Signup;
