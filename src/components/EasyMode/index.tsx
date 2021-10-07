import React from "react";
import "./easymode.css";
import TileList from "../TileList";
import ModalGenerator, { ModalTemplate } from "../ModalTemplate";
import "react-responsive-modal/styles.css";
import { useData } from "../Contexts";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../redux";
//we need openState and onCloseState

const FailModal = ModalGenerator(ModalTemplate);

const EasyMode: React.FC = () => {
  const state = useSelector((state: State) => state);
  console.log(state);
  const dispatch = useDispatch();
  const { newTile, addRow } = bindActionCreators(actionCreators, dispatch);
  const context = useData();
  return (
    <section>
      <div className="level">
        <h2 onClick={context.scriptToWin}>Level</h2> <h2>{context.row - 2}</h2>
        <button onClick={()=> addRow()}>test</button>
      </div>
      <div className="list">
        <TileList {...context} />
      </div>
      <FailModal
        winCheck={context.winCheck}
        open={context.openModal}
        onClose={context.onCloseModal}
        addPlayer={context.addPlayer}
      />
    </section>
  );
};

export default EasyMode;
