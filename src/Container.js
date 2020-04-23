import React from "react";
import Data from "./MockData";
import Nav from "./components/Nav.js";

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      studentData: Data,
    };
  }
  render() {
      
    return (
      <div>
        <Nav/>
      </div>
    );
  }
}

export default Container;
