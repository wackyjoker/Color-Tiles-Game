import React, { useContext, useEffect, useState } from "react";
import { IContext } from "../Types";
import { Game } from "../utils";

export const useData = () => useContext(Contexts);
const Contexts = React.createContext({} as IContext);

export const Provider: React.FC = ({ children }) => {
  const [player, setPlayer] = useState<Array<String>>([]);
  const [tiles, setTiles] = useState<Array<Boolean>>([]);
  const [row, setRow] = useState(2);
  const [winCheck, setWinCheck] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  const randomHue = Math.floor(Math.random() * 360);

  const wrongColor = `hsl(${randomHue},100%, 50%)`;
  const correctColor = `hsl(${randomHue},60%,70%)`;

  const colorPicker = (check: Boolean) => (check ? correctColor : wrongColor);

  const newGame = new Game(row);
  const handleError = () => {
    // alert("Wrong Tile,Game Over");
    setWinCheck(false);
    onOpenModal();
    resetRows();
    newGame.setGame(setTiles);
  };
  const resetRows = () => setRow(2);
  const addRow = () => setRow((prevState) => prevState + 1);

  useEffect(() => {
    if (row > 4) {
      setWinCheck(true);
      onOpenModal();
      resetRows();
    } else {
      newGame.setGame(setTiles);
    }
  }, [row]);

  const validator = (check: Boolean) => (check ? addRow : handleError);
  return (
    <Contexts.Provider value={{ tiles, row, openModal, winCheck, colorPicker, validator, onCloseModal }}>
      {children}
    </Contexts.Provider>
  );
};
