import React, { Component } from "react";
import logo from "../../images/logo.png";
import "../../css/navbar.css";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <>
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
        <nav className="navbar navbar-expand-md navbar-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <Link to="/technology" className="nav-link text-uppercase ml-5">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/health" className="nav-link text-uppercase ml-5">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/business" className="nav-link text-uppercase ml-5">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sports" className="nav-link  text-uppercase ml-5">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/entertainment"
                  className="nav-link  text-uppercase ml-5"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/science" className="nav-link text-uppercase ml-5">
                  Science
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
export default Navbar;
