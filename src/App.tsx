import React from "react";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import EasyMode from "./components/EasyMode";
import MineSweeper from "./components/HardMode";
import ScoreBoard from "./components/ScoreBoard";
import { TileProvider } from "./components/Contexts";
import { Provider } from "react-redux";
import store from './redux/store';
import "./styles/App.css";



function App() {
  console.log('this is our store',store)
  return (
    <Provider store={store}>
      <TileProvider>
        <Router>
          <Header />
          <div className="main" role="main">
            <Switch>
              <Redirect exact from="/" to="/easymode" />
              <Route path="/easymode" exact component={EasyMode} />
              <Route path="/minesweeper" component={MineSweeper} />
              <Route path="/scoreboard" component={ScoreBoard} />
              <Route component={() => <h1>Page Not Found 404</h1>} />
            </Switch>
          </div>
        </Router>
      </TileProvider>
    </Provider>
  );
}

export default App
