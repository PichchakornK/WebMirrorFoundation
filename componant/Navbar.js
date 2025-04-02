import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Navbar, Nav, Button } from "react-bootstrap";

const CustomNavbar = () => {
  const { user, logout } = useAuth();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">ศูนย์แบ่งต่อ</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

        {user && user.role === "admin" && (
          <Nav.Link as={Link} to="/admin">Admin Dashboard</Nav.Link>
        )}

        {user && user.role === "user" && (
          <Nav.Link as={Link} to="/user">User Dashboard</Nav.Link>
        )}
      </Nav>

      {user ? (
        <Button variant="outline-light" onClick={logout}>Logout</Button>
      ) : (
        <>
          <Button variant="outline-light" onClick={() => login("user")}>Login as User</Button>
          <Button variant="outline-light" onClick={() => login("admin")} className="ms-2">Login as Admin</Button>
        </>
      )}
    </Navbar>
  );
};

export default CustomNavbar;
