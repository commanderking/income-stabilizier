import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import ContractAgreement from "./containers/ContractAgreement";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Dashboard} />
          <Route path="/contract" component={ContractAgreement} />
        </div>
      </Router>
    );
  }
}

export default App;
