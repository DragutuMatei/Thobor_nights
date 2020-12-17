import React, { useState } from "react";
import Back from "../components/Back";
import Help from "../components/Help";

function Bilet() {
  const [src, setSrc] = useState(require("../img/nu.png").default);
  const [text, setText] = useState("");

  const submit = () => {
    const ras = text
      .trim()
      .toString()
      .toLowerCase()
      .split("")
      .filter((e) => e.trim().length)
      .join("");
    if (ras === "aratacodul") {
      console.log("XJKASB");
    } else if (ras === "xjkasb") {
      window.sessionStorage.setItem("Bilet", "true");
      window.location.pathname = "/FinalPage";
    } else {
      alert("Codul este gresit");
    }
  };

  return (
    <>
      {window.sessionStorage.getItem("Vedere") && (
        <>
          <div
            className="fullPage l"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              padding: "0 100px",
            }}
          >
            <Back />
            <div className="cerinta" style={{ margin: 50 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              recusandae amet nihil at alias?
            </div>
            <div className="imagi">
              <div className="small">
                <img
                  src={require("../img/nu.png").default}
                  onClick={() => {
                    setSrc(require("../img/nu.png").default);
                  }}
                  alt=""
                />
                <img
                  src={require("../img/stiu.png").default}
                  onClick={() => {
                    setSrc(require("../img/stiu.png").default);
                  }}
                  alt=""
                />
                <img
                  src={require("../img/care.png").default}
                  onClick={() => {
                    setSrc(require("../img/care.png").default);
                  }}
                  alt=""
                />
                <img
                  src={require("../img/este.png").default}
                  onClick={() => {
                    setSrc(require("../img/este.png").default);
                  }}
                  alt=""
                />
                <img
                  src={require("../img/ordinea.png").default}
                  onClick={() => {
                    setSrc(require("../img/ordinea.png").default);
                  }}
                  alt=""
                />
              </div>
              <div className="big">
                <img src={src} alt="" />
              </div>
            </div>
            <div className="rasp" style={{ marginBottom: 150 }}>
              <input
                type="text"
                onChange={(e) => {
                  setText(e.target.value);
                }}
                placeholder="Scrie codul"
              />
              <button onClick={submit}>Submit</button>
            </div>
          </div>
          <Help text='Acest nivel folosește limbajul marinarilor de acum aproximativ 200 de ani.  Ai nevoie de ajutor? Îți recomandăm să cauți pe google image "steaguri litere" pentru descifrarea codului.' />
        </>
      )}
    </>
  );
}

export default Bilet;
