import React, { useState } from "react";
import { Modal, ModalProps } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./ModalTemp.css";
import loseimg from "../../images/gameover.png";
import winimg from "../../images/weWin.png";
import { useNavigate } from "react-router-dom";
interface TempProps extends ModalProps {
  open: boolean;
  onClose(): void;
  addPlayer: (player: string) => void;
  winCheck: boolean;
}

//Unecessary Higher Order Component,But in case you wanna know.
const ModalGenerator = (Modal: React.FC<TempProps>) => {
  const Wrapped = (props: TempProps) => {
    return <Modal {...props} />;
  };
  return Wrapped;
};
export default ModalGenerator;

// Modal Template Argument
export const ModalTemplate: React.FC<TempProps> = (props) => {
  const [input, setInput] = useState("");
  let navigate = useNavigate();
  const handleClick = (e: any) => {
    props.addPlayer(input);
    navigate("/scoreboard");
  };
  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  const gameoverComp = (
    <>
      <h1>You just Lost</h1>
      <img alt="gameover" src={loseimg} className="modal__img" />
      <h1>Try again shall we?</h1>
    </>
  );
  const winComp = (
    <>
      <h1>Congrats!!</h1>
      <img alt="You Win" src={winimg} className="modal__img" />
      <form>
        <input type="text" placeholder="Enter Your name" onChange={handleChange} />
        <button type="submit" onClick={handleClick}>
          Enter
        </button>
      </form>
    </>
  );
  return (
    <div>
      <Modal open={props.open} onClose={props.onClose} center role="dialog">
        <div className="d-flex-center"> {props.winCheck ? winComp : gameoverComp}</div>
      </Modal>
    </div>
  );
};
