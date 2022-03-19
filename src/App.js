import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Home, Banner, Footer } from "./Components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/banner">
            <Banner />
          </Route>
          <Route path="/footer">
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
