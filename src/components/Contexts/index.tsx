import React, { useContext, useEffect, useState } from "react";
import { IContext } from "../Types";
import { Game } from "../utils";
export const useData = () => useContext(Contexts);
const Contexts = React.createContext({} as IContext);

export const Provider: React.FC = ({ children }) => {
  const [players, setPlayers] = useState<Array<string>>([]);
  const [tiles, setTiles] = useState<Array<Boolean>>([]);
  const [row, setRow] = useState(2);
  const [winCheck, setWinCheck] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  const newGame = new Game(row);

  const handleError = () => {
    setWinCheck(false);
    onOpenModal();
    resetRows();
  };
  const addPlayer = (player: string) => {
    setPlayers((prevState) => [...prevState, player]);
    onCloseModal();
  };
  const colorPicker = (bol: Boolean) => (bol ? newGame.colors[1] : newGame.colors[0]);
  const resetRows = () => setRow(2);
  const addRow = () => setRow((prevState) => prevState + 1);

  useEffect(() => {
    addPlayer("goya");
    addPlayer("moda");
    addPlayer("moda");
    addPlayer("moda");

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
    <Contexts.Provider
      value={{ tiles, row, players, openModal, winCheck, addPlayer, colorPicker, validator, onCloseModal }}
    >
      {children}
    </Contexts.Provider>
  );
};
