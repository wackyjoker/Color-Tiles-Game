import React from "react";
import "./tile.css";
import { IContext } from "../Types";
type Props<ColorType> = Partial<IContext> & { key: number; color: string } & ColorType;

function Tile<T>(props: Props<T>) {
  /*these code would display our HSL color in browser 
  instead of converting it to RGB, but not recommended.

  const tile = React.useRef() as React.MutableRefObject<HTMLButtonElement>;
  const changeColor = () => {
    tile.current.setAttribute("style", `background-color:${props.color}`);
  };
  useLayoutEffect(() => {
    changeColor();
  }, []); */
  const tileStyle = {
    backgroundColor: props.color,
  };

  return (
    <button id="tile__grid" onClick={props.returnedHandler} style={tileStyle} data-auto-id="tile_grid">
      Tile
    </button>
  );
}
export default Tile;
