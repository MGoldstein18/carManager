//import React, css, bootstrap, react router and relevant components
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import View from "./components/View.js";
import Add from "./components/Add.js";
import Edit from "./components/Edit.js";
import Old from "./components/Old.js";
import UpdateMany from "./components/UpdateMany.js";
import Home from "./components/Home.js";

//use react router to switch between pages
function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={Home} />
        <Route path="/all" component={View} />
        <Route path="/add" component={Add} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/old" component={Old} />
        <Route path="/updatemany" component={UpdateMany} />
      </div>
    </Router>
  );
}

export default App;
