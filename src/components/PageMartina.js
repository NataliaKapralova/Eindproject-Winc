import React from "react";
import Nav from "./Nav.js";
import Chard from "./Chard"
class PageMartina extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        {" "}
        <Nav />
        <h2> Martina </h2>
      </div>
    );
  }
}

export default PageMartina;
