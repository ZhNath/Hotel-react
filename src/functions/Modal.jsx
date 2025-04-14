import React from "react";
import ReactDOM from "react-dom";
import ClickOut from "./ClickOut.jsx";
import CloseButton from "../components/CloseButton.jsx";




const Modal = ({ type, size, isOpen, onClose, onClickOutside, children }) => {
    if (!isOpen) return null;
    const [width, height] = size||["auto", "auto"];
    
    return ReactDOM.createPortal (
        isOpen &&
        <ClickOut onClickOutside={onClickOutside}>
            <div className={`modal-overlay ${type} ${isOpen? 'open':''}`} style={{ width: width, height: height }}>
                <CloseButton onClick={onClose} />
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </ClickOut>
        , document.getElementById("modal-root")
    );
}
export default Modal;