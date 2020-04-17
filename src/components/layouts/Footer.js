import React, { Component } from "react";
import "../../css/navbar.css";
class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="page-footer font-small">
          <div className="footer-copyright text-center text-white py-3">
            © 2020 Copyright:
            <a href="https://newsapi.org/" className="text-white">
              {" "}
              All rights reserved
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
