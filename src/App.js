import React, { Component } from "react";
import Button from "./Component/Button";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import SimpleForm from "./Component/SimpleForm";
import Form from "./Component/Form";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Contact}></Route>

          <Route path="/reg" component={Form}></Route>
        </div>
      </Router>
    );
  }
}
export default App;
