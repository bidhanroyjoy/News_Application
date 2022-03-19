import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar,Homepage } from './Components';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import Home from "./Components/Home";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Homepage /> */}
        <Home />
      
        
      </Router>
    </div>
  );
}

export default App;
