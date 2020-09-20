import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
const navbar = () => {
    const {logout} =  useContext(AuthContext)
  return (
    <Navbar expand="lg">
      <Link href="/board">
        <Navbar.Brand href="#board">Guest Book</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => logout()}>Log out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navbar;
