import React from "react";
import { useData } from "../Contexts";
const ScoreBoard = () => {
  const context = useData();
  return (
    <div>
      {context.players.map((ele, key) => {
        <h2>{ele}</h2>;
      })}
    </div>
  );
};
export default ScoreBoard;
