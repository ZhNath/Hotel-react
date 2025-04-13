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
    <div ref={wrapperRef} style={{ width: "100%" }}>
      {children}
    </div>
  );
};

export default ClickOut;
