import React from "react";
import Container from "./Container";
import PageEvelyn from "./components/PageEvelyn.js";
import PageAranka from "./components/PageAranka.js";
import PageFloris from "./components/PageFloris.js";
import PageMartina from "./components/PageMartina.js";
import PageHector from "./components/PageHector.js";
import PageMaurits from "./components/PageMaurits.js";
import PageRahima from "./components/PageRahima.js";
import PageSandra from "./components/PageSandra.js";
import PageStorm from "./components/PageStorm.js";
import PageWietske from "./components/PageWietske.js";

import CSS from "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
         <header>
          Eindproject Winc Academy
          <i>
            <p> Student DashBord</p>
          </i>
        </header>
      <Router>
        <Switch>
          <Container path="/" exact component={Container} />
          <Route path="/PageEvelyn" component={PageEvelyn} />
          <Route path="/PageAranka" component={PageAranka} />
          <Route path="/PageFloris" component={PageFloris} />
          <Route path="/PageHector" component={PageHector} />
          <Route path="/PageMartina" component={PageMartina} />
          <Route path="/PageMaurits" component={PageMaurits} />
          <Route path="/PageRahima" component={PageRahima} />
          <Route path="/PageSandra" component={PageSandra} />
          <Route path="/PageStorm" component={PageStorm} />
          <Route path="/PageWietske" component={PageWietske} />
        </Switch>
      </Router>
      <footer>{"Natalia Kapralova. Student Winc Academy"}</footer>
    </div>
  );
}

export default App;
