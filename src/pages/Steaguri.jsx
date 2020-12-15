import React, { useState } from "react";
import { Link } from "react-router-dom";
import Back from "../components/Back";
import Help from "../components/Help";

function Steaguri() {
  const [raspuns, setRaspuns] = useState("");
  const [corect, setCorect] = useState(false);

  const src = {
    p: require("../img/adskjdkajsbasdasdasdsa.png").default,
    i: require("../img/sadjiasdji.png").default,
    s: require("../img/asljdbaskj.png").default,
    c: require("../img/ndjkasnsakj.png").default,
    a: require("../img/dkasjdbasjk.png").default,
    l: require("../img/plplpl.png").default,
    e: require("../img/askjdnsabasda.png").default,
    r: require("../img/asdjkbsa.png").default,
    g: require("../img/hanga.png").default,
    n: require("../img/kajshdkasjh.png").default,
  };

  const submit = () => {
    const ras = raspuns
      .trim()
      .toString()
      .toLowerCase()
      .split("")
      .filter((e) => e.trim().length)
      .join("");
    if (ras === "pisicaaleargacainele") {
      window.sessionStorage.setItem("steaguri", true);
      setCorect(true);
    } else {
      alert("Raspunsul e gresit");
      setCorect(false);
    }
  };

  return (
    <>
      {window.sessionStorage.getItem("findLink") && (
        <>
          <div
            className="fullPage "
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "column",
              padding: "0 100px",
            }}
          >
            <Back />
            <div className="cerinta">
              Decodati acest mesaj secret si scrieti rezultatul
            </div>
            <div className="mesaj">
              <div className="p">
                <img src={src.p} alt="" />
                <img src={src.i} alt="" />
                <img src={src.s} alt="" />
                <img src={src.i} alt="" />
                <img src={src.c} alt="" />
                <img src={src.a} alt="" />
              </div>
              <div className="p">
                <img src={src.a} alt="" />
                <img src={src.l} alt="" />
                <img src={src.e} alt="" />
                <img src={src.a} alt="" />
                <img src={src.r} alt="" />
                <img src={src.g} alt="" />
                <img src={src.a} alt="" />
              </div>
              <div className="p">
                <img src={src.c} alt="" />
                <img src={src.a} alt="" />
                <img src={src.i} alt="" />
                <img src={src.n} alt="" />
                <img src={src.e} alt="" />
                <img src={src.l} alt="" />
                <img src={src.p} alt="" />
              </div>
            </div>
            <div className="rasp">
              <input
                type="text"
                placeholder="Scrie raspunsul tau"
                onChange={(e) => {
                  setRaspuns(e.target.value);
                }}
              />
              <button type="submit" onClick={submit}>
                Submit
              </button>
            </div>
            <div className="rez">
              {corect ? (
                <h1>
                  <Link
                    to="/Coor"
                    style={{ color: "white", fontSize: 20, fontFamily: "Lato" }}
                  >
                    Urmatorul nivel
                  </Link>
                </h1>
              ) : null}
            </div>
          </div>
          <Help text="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem " />
        </>
      )}
    </>
  );
}

export default Steaguri;
