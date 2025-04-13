import React from "react";
import { useContext } from "react";
import BasicContext from "../context/BasicContext.jsx";
import ClickOut from "../functions/ClickOut.jsx";
import { useState } from "react";
import { useEffect } from "react";

const Modal = ({ type, size, isOpen, onClose, children, onClickOutside }) => {
    if (!isOpen) return null;
    return (
        <ClickOut onClickOutside={onClickOutside}>
            <div className={`modal-overlay ${type} ${size}`}>
                <div className="modal-content">
                    <button className="close" onClick={onClose}>
                        &times;
                    </button>
                    {children}
                </div>
            </div>
        </ClickOut>
    );
}
export default Modal;