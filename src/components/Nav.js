import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="Nav-Links">
        <Link to="/">
          <li> Home </li>
        </Link>
        <Link to="/PageEvelyn">
          <li> Evelyn</li>
        </Link>
        <Link to="/PageAranka">
          <li> Aranka </li>
        </Link>
        <Link to="/PageFloris">
          <li> Floris</li>
        </Link>
        <Link to="/PageHector">
          <li>Hector</li>
        </Link>
        <Link to="/PageMartina">
          <li>Martina</li>
        </Link>
        <Link to="/PageMaurits">
          <li>Maurits</li>
        </Link>
        <Link to="/PageRahima">
          <li>Rahima</li>
        </Link>
        <Link to="/PageSandra">
          <li>Sandra</li>
        </Link>
        <Link to="/PageStorm">
          <li>Storm</li>
        </Link>
        <Link to="/PageWietske">
          <li>Wietske</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
