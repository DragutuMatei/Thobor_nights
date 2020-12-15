import React from "react";

function Back() {
  return (
    <div
      className="back"
      onClick={() => {
        window.history.back();
      }}
    >
      <i className="fas fa-long-arrow-alt-left"></i> Back
    </div>
  );
}

export default Back;
