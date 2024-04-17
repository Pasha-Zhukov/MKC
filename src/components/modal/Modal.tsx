import React, { useEffect, useState } from "react";

import ReactDOM from "react-dom";
import Close from "../../assets/importFiles/close.svg";

import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [modalContainer] = useState(() => {
    const div = document.createElement("div");
    return div;
  });

  useEffect(() => {
    if (isOpen) {
      document.body.appendChild(modalContainer);
    } else {
      if (document.body.contains(modalContainer)) {
        document.body.removeChild(modalContainer);
      }
    }

    return () => {
      if (document.body.contains(modalContainer)) {
        document.body.removeChild(modalContainer);
      }
    };
  }, [isOpen, modalContainer]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-btn">
          <img src={Close} alt="Close" />
        </button>
        {children}
      </div>
    </div>,
    modalContainer
  );
};

export default Modal;
