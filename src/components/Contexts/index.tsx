import React, { useContext, useEffect, useState } from "react";
import { IContext } from "../Types";

export const useData = () => useContext(Contexts);
const Contexts = React.createContext({} as IContext);

export const Provider: React.FC = ({ children }) => {
  // const [player, setPlayer] = useState("");
  const [tiles, setTiles] = useState<Array<Boolean>>([]);
  const [row, setRow] = useState(2);

  const handleRows = () => setRow((prevState) => prevState + 1);
  useEffect(() => {
    const newArr = new Array(row * row).fill(false);
    const rightTile = Math.floor(Math.random() * newArr.length);
    newArr[rightTile] = true;
    setTiles(newArr);
  }, [row]);
  // const [levels, setLevels] = useState(1);
  // const handleInput = (e: string) => {
  //   setPlayer(e);
  // };
  //,player , handleInput, levels
  //  player: string;
  //handleInput: IhandleInput;
  //levels: Number;

  // const handleLevels = setLevels((prevState) => prevState + 1);
  return <Contexts.Provider value={{ tiles, row, handleRows }}>{children}</Contexts.Provider>;
};
