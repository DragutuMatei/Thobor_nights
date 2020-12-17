import React from "react";
import Back from "../components/Back";

function FinalPage() {
  return (
    <>
      {window.sessionStorage.getItem("Bilet") && (
        <>
          <div
            className="fullPage l"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "column",
              padding: "0 100px",
            }}
          >
            <Back />
          </div>
        </>
      )}
    </>
  );
}

export default FinalPage;
