import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EasyMode from "./components/EasyMode";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path={"/easy-mode"} element={<EasyMode />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
