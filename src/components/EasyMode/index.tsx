import React from "react";
import "./easymode.css";
import TileList from "../TileList";
import { useData } from "../Contexts";
const EasyMode: React.FC = () => {
  let context = useData();
  console.log(context);

  return (
    <div role="list" className="list">
      <TileList />
    </div>
  );
};

export default EasyMode;
