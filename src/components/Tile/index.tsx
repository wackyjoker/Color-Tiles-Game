import React from "react";
import "./tile.css";
import { IContext } from "../Types";
type Props = Partial<IContext> & { key: number };
const Tile: React.FC<Props> = (props) => {
  const listStyle = {
    backgroundColor: props.color,
  };
  return (
    <button className="tile__grid" onClick={props.returnedHandler} style={listStyle}>
      Tile
    </button>
  );
};
export default Tile;
