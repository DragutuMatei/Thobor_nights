import React, { useState } from "react";
import { Link } from "react-router-dom";
import Back from "../components/Back";
import Counter from "../components/Counter";
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
    if (ras === "pisicaaleargacainele" || ras === "pisicaaleargăcâinele") {
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
            className="fullPage l"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "column",
              padding: "0 100px",
            }}
          >
            <Counter/>
            <Back />
            <div className="cerinta">
              De parcă ascunderea informațiilor nu erau de ajuns, acum ni le-a
              și codificat în limbajul marinarilor. Decodați mesajul ascuns.
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
          <Help text='Acest nivel folosește limbajul marinarilor de acum aproximativ 200 de ani.  Ai nevoie de ajutor? Îți recomandăm să cauți pe google image "steaguri litere" pentru descifrarea codului.' />
        </>
      )}
    </>
  );
}

export default Steaguri;
