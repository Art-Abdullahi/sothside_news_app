import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "../../css/navbar.css";
const Navstrap = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="container">
        <header className="blog-header py-3">
          <div className="align-items-center">
            <div className="text-center">
              <Link to="/" className="blog-header-logo text-dark">
                <img src={logo} alt="logo" height="50" />
              </Link>
            </div>
          </div>
        </header>
      </div>
      <Navbar light expand="md">
        <NavbarToggler onClick={toggle} className="toggle ml-auto" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="m-auto text-white" navbar>
            <NavItem>
              {" "}
              <Link
                to="/technology"
                className="nav-link text-white text-uppercase ml-5"
              >
                Technology
              </Link>
            </NavItem>
            <NavItem>
              {" "}
              <Link
                to="/health"
                className="nav-link  text-white text-uppercase ml-5"
              >
                Health
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/business"
                className="nav-link  text-white text-uppercase ml-5"
              >
                Business
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/sports"
                className="nav-link  text-white  text-uppercase ml-5"
              >
                Sports
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/entertainment"
                className="nav-link  text-white  text-uppercase ml-5"
              >
                Entertainment
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/science"
                className="nav-link text-white text-uppercase ml-5"
              >
                Science
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navstrap;
