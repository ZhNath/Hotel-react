import React, { useEffect, useRef } from "react";

const ClickOut = ({ children, onClickOutside }) => {
  const wrapperRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClickOutside]);

  return (
    <React.Fragment>
       {React.cloneElement(children, { ref: wrapperRef })}
    </React.Fragment>
  );
};

export default ClickOut;
