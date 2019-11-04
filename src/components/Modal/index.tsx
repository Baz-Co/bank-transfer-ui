import React from "react";
import ReactModal from "react-modal";
import "./Modal.css";

// Sets all content outside the modal as aria-hidden for WIA-ARIA compliance
ReactModal.setAppElement("#root");

interface IProps {
  isOpen: boolean;
  children: React.ReactNode;
}

// export class Modal extends React.Component<IProps> {
export const Modal: React.FC<IProps> = ({ isOpen, children }) => {
  return (
    <div>
      <ReactModal isOpen={isOpen} contentLabel="Modal" className="Modal">
        {children}
      </ReactModal>
    </div>
  );
};

export default Modal;
