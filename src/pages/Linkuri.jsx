import React from "react";
import { Link } from "react-router-dom";

function Linkuri() {
  return (
    <>
      {window.sessionStorage.getItem("Bin") && (
        <div className="fullPage">
          <div className="cerinta">
            Cauta prin linkuri si vezi easter egg-urile
          </div>
          <div className="mesaje">
            <Link to="/site1">site1</Link>
            <Link to="/site2">site2</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Linkuri;
