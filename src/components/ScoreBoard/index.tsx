import React from "react";
import { useData } from "../Contexts";
import "./ScoreBoard.css";
import { AiOutlineUser } from "react-icons/ai";
const ScoreBoard = () => {
  const context = useData();
  return (
    <div className="score-container d-flex-center">
      {context.players.map((ele, key) => {
        return (
          <div>
            <h2>{key + 1}</h2>
            <AiOutlineUser />
            <h2>{ele}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default ScoreBoard;
