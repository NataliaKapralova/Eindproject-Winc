import React from "react";
import Data from "../MockData";
import Nav from "./Nav.js";
import Chard from "./Chard";

class PageAranka extends React.Component {
  render() {
    const opdrachten = [];
    Data.forEach((row) => {
      if (opdrachten.indexOf(row.Opdracht) === -1) {
        opdrachten.push(row.Opdracht);
      }
    });
    const dataOpdrachtGemiddelden = [];
    opdrachten.forEach((opdracht) => {
      const waarderingenVoorOpdracht = Data.filter(
        (row) => row.Opdracht === opdracht && row.Naam === "Aranka"
      );
      let moeilijkTotal = 0;
      let leukTotal = 0;
      waarderingenVoorOpdracht.forEach((row) => {
        moeilijkTotal += row.Moeilijk;
        leukTotal += row.Leuk;
      });
      dataOpdrachtGemiddelden.push({
        opdracht: opdracht,
        moeilijkGemiddelde: moeilijkTotal / waarderingenVoorOpdracht.length,
        leukGemiddelde: leukTotal / waarderingenVoorOpdracht.length,
      });
    });

    console.log(dataOpdrachtGemiddelden);
    return (
      <div>
        <Nav />
        <h1> Gemiddelde Aranka</h1>
        <Chard data={dataOpdrachtGemiddelden} />
      </div>
    );
  }
}

export default PageAranka;
