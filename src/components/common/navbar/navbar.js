import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../../assets/pave_logo_black.png";

function NavBar() {
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
          <Navbar.Text style={{ marginRight: "20px" }}>
            <a href="#">Login</a>
          </Navbar.Text>
          <Navbar.Text>
            <a href="#">Sign up</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
