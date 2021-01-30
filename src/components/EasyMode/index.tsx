import React from "react";
import "./easymode.css";
import TileList from "../TileList";
import ModalGenerator, { ModalTemplate } from "../ModalTemplate";
import "react-responsive-modal/styles.css";
import { useData } from "../Contexts";

//we need openState and onCloseState
const FailModal = ModalGenerator(ModalTemplate);

const EasyMode: React.FC = () => {
  const context = useData();
  console.log(context);

  return (
    <section>
      <div> Level {context.row - 2}</div>
      <div className="list">
        <TileList {...context} />
      </div>
      <FailModal winCheck={context.winCheck} open={context.openModal} onClose={context.onCloseModal} />
    </section>
  );
};

export default EasyMode;
