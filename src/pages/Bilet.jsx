import React, { useState } from "react";
import Back from "../components/Back";
import Help from "../components/Help";

function Bilet() {
  const [src, setSrc] = useState(require("../img/nu.png").default);
  const [text, setText] = useState("");
  const [cod, setCode] = useState(makeid(5));

  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const submit = () => {
    const ras = text
      .trim()
      .toString()
      .toLowerCase()
      .split("")
      .filter((e) => e.trim().length)
      .join("");
    if (ras === "aratacodul") {
      console.log(cod);
    } else if (ras === cod.toLowerCase()) {
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
              Se pare că stick-ul are parola, părea prea ușor, nu? Ajută-ne să
              decodificăm parola, ne-a lăsat 4 bilete cu instrucțiuni, te poți
              folosi de ele.
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
          <Help text="Citește mesajul din cele 4 bilete, pune-l in caseta text, trimte, apoi verifica consola și introdu codul de acolo. " />
        </>
      )}
    </>
  );
}

export default Bilet;
