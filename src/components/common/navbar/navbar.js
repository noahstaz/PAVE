import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
<<<<<<< Updated upstream
import logo from "../../../assets/pave_logo_black.png";
import { useEffect, useState } from "react";
function NavBar() {
  const [showLogin, setShowLogin] = useState(localStorage.getItem("showLogin"));
  useEffect(() => {
    setShowLogin(localStorage.getItem("showLogin"));
  },[]);
  console.log(showLogin);
=======
import logo_black from "../../../assets/pave_logo_black.png";
import logo_white from "../../../assets/pave_logo_white.png";

function NavBar({ main, profile }) {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
        {!main && (
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
        )}
        <Navbar
          variant={main ? "dark" : "light"}
          bg={main ? "dark" : "light"}
          className="justify-content-end"
        >
          {main ? (
            <Navbar.Text style={{ marginRight: "20px" }}>
              <a href="/profile">Hi {profile.name}!</a>
            </Navbar.Text>
          ) : (
            <>
              <Navbar.Text style={{ marginRight: "20px" }}>
                <a href="/">Login</a>
              </Navbar.Text>
              <Navbar.Text>
                <a href="/">Sign up</a>
              </Navbar.Text>
            </>
          )}
        </Navbar>
>>>>>>> Stashed changes
      </Container>
    </Navbar>
  );
}

export default NavBar;
