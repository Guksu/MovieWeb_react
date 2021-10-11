import React, { Component } from "react";
import Router from "Components/Router";
import GlobalStyles from "./GlobalStyles";

class App extends Component {
  render() {
    return (
      <>
        <Router></Router>
        <GlobalStyles></GlobalStyles>
      </>
    );
  }
}

export default App;
