import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import logo_black from "../../../assets/pave_logo_black.png";
import logo_white from "../../../assets/pave_logo_white.png";
import { Link } from "react-router-dom";

function NavBar({ main, profile }) {
  const [showLogin, setShowLogin] = useState(localStorage.getItem("showLogin"));
  const [showVerify, setVerify] = useState(false);

  useEffect(() => {
    setShowLogin(localStorage.getItem("showLogin"));
  }, []);

  return (
    <Navbar
      style={{ padding: 0 }}
      fixed="top"
      variant={main ? "dark" : "light"}
      bg={main ? "dark" : "light"}
      expand="lg"
    >
      <Container style={{ color: "white" }}>
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src={main ? logo_white : logo_black}
            width="40"
            height="40"
            style={{ marginRight: "5px" }}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/#features">
            Features
          </Nav.Link>
          <Nav.Link as={Link} to="/main">
            Market
          </Nav.Link>
          {showLogin && <>
              <Nav.Link as={Link} to="/wallet">Wallet</Nav.Link>
          </>
          }
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse
          variant={main ? "dark" : "light"}
          bg={main ? "dark" : "light"}
          className="justify-content-end"
        >
          {!showLogin && <>
            <Navbar.Text style={{ marginRight: "20px" }}>
            <a href="/signin">Login</a>
          </Navbar.Text>
          <Navbar.Text disable="true">
            <a href="/signup" style={{ marginRight: "20px" }}>Sign up</a>
          </Navbar.Text>
          </>
          }
          <Navbar.Text>
          {showLogin && <>{JSON.parse(localStorage.getItem("newUser"))?.name}</>}</Navbar.Text>
          <Navbar.Text style={{ marginLeft: "20px" }}>
            <a href="#/verify">Verify</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
