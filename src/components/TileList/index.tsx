import React from "react";
import Tile from "../Tile";
import "./tilelist.css";
import { useData } from "../Contexts";
//correct={ele}
const TileList: React.FC = () => {
  let context = useData();
  let { row } = context;
  const listStyle = {
    gridTemplateColumns: `repeat(${row}, 1fr)`,
    gridTemplateRows: `repeat(${row}, 1fr)`,
  };

  return (
    <div className="tile__list" style={listStyle}>
      {context.tiles.map((ele, index) => {
        if (ele) return <Tile {...context} key={index} />;
        return <Tile key={index} />;
      })}
    </div>
  );
};

export default TileList;
