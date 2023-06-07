import { Col, Row } from "reactstrap";
import "./Header.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter, Link } from "react-router-dom";
function Header(): JSX.Element {
  
  return (
    <div className="Header">
      <Row>
        <Col>
          <Link to="/add_employee">add employee</Link>
        </Col>
        <Col>
          <Link to={"/"}>show employees</Link>
        </Col>
      </Row>
    </div>
  );
}
export default Header;
