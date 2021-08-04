import React, { useContext, useEffect, useState, useMemo } from 'react'
import { IContext } from '../Types'
import { Game } from '../utils'
export const useData = () => useContext(Contexts)
const Contexts = React.createContext({} as IContext)

export const TileProvider: React.FC = ({ children }) => {
  const [players, setPlayers] = useState<Array<string>>([])
  const [tiles, setTiles] = useState<Array<Boolean>>([])
  const [row, setRow] = useState(2)
  const [winCheck, setWinCheck] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const onOpenModal = () => setOpenModal(true)
  const onCloseModal = () => setOpenModal(false)

  const newGame = useMemo(() => new Game(row), [row])

  const handleError = () => {
    setWinCheck(false)
    onOpenModal()
    resetRows()
    // newGame.setGame(setTiles);
  }
  const addPlayer = (player: string) => {
    setPlayers((prevState) => [...prevState, player])
    onCloseModal()
  }
  const colorPicker = (bol: Boolean) =>
    bol ? newGame.colors[1] : newGame.colors[0]
  const resetRows = () => setRow(2)
  const addRow = () => setRow((prevState) => prevState + 1)

  const scriptToWin = () => {
    let timer = 0
    const interval = setInterval(function () {
      timer++
      console.log(row)
      addRow()
      if (timer > 2) {
        timer = 0
        clearInterval(interval)
      }
    }, 1500)
  }
  useEffect(() => {
    if (row > 4) {
      setWinCheck(true)
      onOpenModal()
      resetRows()
      console.log('game new', row)
      newGame.setGame(setTiles)
    } else {
      console.log('game resetted', row)
      newGame.setGame(setTiles)
    }
  }, [newGame])

  const validator = (check: Boolean) => (check ? addRow : handleError)
  return (
    <Contexts.Provider
      value={{
        tiles,
        row,
        players,
        openModal,
        winCheck,
        scriptToWin,
        addPlayer,
        colorPicker,
        validator,
        onCloseModal
      }}
    >
      {children}
    </Contexts.Provider>
  )
}
