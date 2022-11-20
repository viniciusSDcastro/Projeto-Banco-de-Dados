import React, { Fragment } from "react";
import "./App.css";
import InputAtor from "./components/inputAtor";
import InputAtua from "./components/inputAtua";

//components

import InputFilme from "./components/InputFilme";
import ListAtores from "./components/ListAtores";
import ListAtua from "./components/ListAtua";
import ListFilmes from "./components/ListFilmes";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputFilme />
        <ListFilmes />
        <InputAtor />
        <ListAtores />
        <InputAtua />
        <ListAtua />
      </div>
    </Fragment>
  );
}

export default App;