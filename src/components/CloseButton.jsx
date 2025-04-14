import React from "react";
import BasicContext from "../context/BasicContext";

const CloseButton = () => {
const {setIsModalOpen} = React.useContext(BasicContext);
const handleOnClick = () => {
  setIsModalOpen(false);
}
  return (
    <button
      className={`closebutton`}
      onClick={handleOnClick}
      title="Close"
    >
      <i className="fa-solid fa-xmark"></i>
    </button>

  );
}
export default CloseButton;