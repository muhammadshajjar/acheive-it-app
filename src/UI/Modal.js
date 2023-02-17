import React from "react";
import ReactDom from "react-dom";
import "./Modal.css";

const ModalOverlay = (props) => {
  return (
    <div className="overlay">
      <div className="modal">
        <div>{props.children}</div>
      </div>
    </div>
  );
};
const portalElement = document.getElementById("modals");
const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
