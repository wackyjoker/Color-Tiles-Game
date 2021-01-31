import React from "react";
import Tile from "../Tile";
import "./tilelist.css";
import { IContext } from "../Types";
const TileList: React.FC<IContext> = (props) => {
  let { row, validator, colorPicker } = props;

  const listStyle = {
    gridTemplateColumns: `repeat(${row}, 1fr)`,
    gridTemplateRows: `repeat(${row}, 1fr)`,
  };

  return (
    <div className="tile__list" style={listStyle}>
      {props.tiles.map((ele, index) => {
        if (ele) return <Tile color={colorPicker(ele)} key={index} returnedHandler={validator(ele)} />;
        return <Tile key={index} color={colorPicker(ele)} returnedHandler={validator(ele)} />;
      })}
    </div>
  );
};

export default TileList;
