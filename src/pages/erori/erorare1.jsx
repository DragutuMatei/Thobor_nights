import React from "react";

function LinkulGresit() {
  return (
    <div className="fullPage">
      <div className="thoborBackground"></div>
      <div className="optiuni">
        <div className="o">
          <h2
            onClick={() => {
              window.history.back();
            }}
          >
            Nu e linkul bun
          </h2>
        </div>
      </div>
    </div>
  );
}

export default LinkulGresit;
