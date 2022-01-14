import React from "react";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
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
            <Routes>
              <Route path="/" element={() => <Navigate to="/easymode" />} />
              <Route path="/easymode"  element={<EasyMode/>} />
              <Route path="/minesweeper" element={<MineSweeper/>} />
              <Route path="/scoreboard" element={<ScoreBoard/>} />
              <Route element={() => <h1>Page Not Found 404</h1>} />
            </Routes>
          </div>
        </Router>
      </TileProvider>
    </Provider>
  );
}

export default App
