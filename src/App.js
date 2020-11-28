import React from "react";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Contact from "./app/pages/Contact";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/create-contact">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
export default App;
