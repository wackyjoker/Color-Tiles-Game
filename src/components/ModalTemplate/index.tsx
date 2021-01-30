import React, { ComponentType, useState } from "react";
import { Modal, ModalProps } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./ModalTemp.css";
interface TempProps extends ModalProps {
  open: boolean;
  onClose(): void;
  winCheck: boolean;
}

// Higher Order Component
const ModalGenerator = (Modal: React.FC<TempProps>) => {
  const Wrapped = (props: TempProps) => {
    return <Modal {...props} />;
  };
  return Wrapped;
};
export default ModalGenerator;

// Modal Template Argument
export const ModalTemplate: React.FC<TempProps> = (props) => {
  console.log("props", props);
  return (
    <div>
      <Modal open={props.open} onClose={props.onClose} center role="dialog">
        {props.winCheck ? <h2>Congrats, YOU WON!!</h2> : <h2>Ups,You just Lost</h2>}
      </Modal>
    </div>
  );
};
