import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import EasyMode from "./components/EasyMode";
import MineSweeper from "./components/HardMode";
import { Provider } from "./components/Contexts";
import "./styles/app.css";
function App() {
  return (
    <Provider>
      <Router>
        <Header />
        <div className="main" role="main">
          <Switch>
            <Redirect exact from="/" to="/easymode" />
            <Route path="/easymode" exact component={EasyMode} />
            <Route path="/minesweeper" component={MineSweeper} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
