import React from "react";
import "./tile.css";
import { IContext } from "../Types";
type Props = Partial<IContext> & { key: number };
const Tile: React.FC<Props> = (props) => {
  return (
    <button className="tile__grid" onClick={props.handleRows}>
      Tile
    </button>
  );
};
export default Tile;
