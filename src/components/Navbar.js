import React from "react";
// import { Link } from "react-router-dom";
import styles from "../styles/navbar.css";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  return (
    <div id="nav-container">
      <nav className="nav">
        <ul>
          <li>
            {" "}
            <Link to="#BirthDeath">Birth & Death Rates</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="#Population">Population</Link>{" "}
          </li>

          <li>
            {" "}
            <Link to="#Income">Income</Link>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
}

// const handleScroll = id => {
//   const item = ReactDOM.findDOMNode(id);
//   window.scrollTo(item.offsetTop);
// };

export default Navbar;
