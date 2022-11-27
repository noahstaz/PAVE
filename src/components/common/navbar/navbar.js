import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../assets/pave_logo_black.png";
import { useEffect, useState } from "react";
function NavBar() {
  const [showLogin, setShowLogin] = useState(localStorage.getItem("showLogin"));
  useEffect(() => {
    setShowLogin(localStorage.getItem("showLogin"));
  },[]);
  console.log(showLogin);
  return (
    <Navbar style={{ padding: 0 }} fixed="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src={logo}
            width="40"
            height="40"
            style={{ marginRight: "5px" }}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {!showLogin && <>
            <Navbar.Text style={{ marginRight: "20px" }}>
            <a href="/signin">Login</a>
          </Navbar.Text>
          <Navbar.Text disable="true">
            <a href="/signup" style={{ marginRight: "20px" }}>Sign up</a>
          </Navbar.Text>
          </>
          }
          {showLogin && <>
            {JSON.parse(localStorage.getItem('newUser')).name}

          </>
          }             
          <Navbar.Text style={{ marginLeft: "20px" }}>
            <a href="/verify">Verify</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
