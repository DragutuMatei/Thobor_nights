import React, { useState } from "react";

function Help({ text }) {
  const [open, setOpen] = useState(false);

  const Open = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <div className="help">
      <i className="fas fa-question-circle" onClick={Open}></i>
      <div
        className="info"
        style={{ width: open ? "400px" : "0", overflow: "hidden" }}
      >
        <div className="instr">{text}</div>
      </div>
    </div>
  );
}

export default Help;
