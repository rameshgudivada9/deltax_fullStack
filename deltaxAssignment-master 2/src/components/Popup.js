import React, { useState } from "react";

const Popup = (props) => {
  return (
    <div className="popup-box" style={{ zIndex: "5" }}>
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
