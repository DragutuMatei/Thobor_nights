import React, { useState } from "react";
import Back from "../components/Back";
import Help from "../components/Help";
import { Link } from "react-router-dom";
import Linky from "../components/Linky";

function Coor() {
  const [text, setText] = useState("");
  const [link, setLink] = useState("");
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const txt = `Cum să cauți un cod ascuns? Simplu, astăzi veți învăța puțin "hacking". 
  Pentru a verifica un cod din spatele unui site trebuie să folosiți Inspect Element.
  
  Pentru a intra in inspect element : (Fn) F12 sau CTRL+SHIFT+I , sau click dreapta - Inspect Element.
  
  Nu ți se potrivesc instrucțiunile? Caută pe google "How to Inspect element".
  
  Trebuie sa aveti taburile de consola, styling si codul paginii.
  
  O data ce ai reușit să intri cu inspect element caută în cod "::after" , acolo ți se va activa secțiune styles ce conține instrucțiunile pentru acest nivel.
  
  Tot ai nevoie de ajutor? Scrie în ce ordine vrei tu acele functii (Ex. functie: "Functie();" ) , apesi pe submit, în acea fereastra de pop up ce te intreaba care este codul, va trebui sa puneți în ordine alfabetica a țărilor, codurile ce le veți găsi în tabul de Inspect Element - TAB -ul "Console" . Fiecare funcție reprezintă o formula, rezolvarea acelei formule va fi partea dvs. de cod de utilizat. Acel cod trebuie utilizat fără spații. Ex: dacă codul găsit de voi este 13 15 8 , trebuie scris 13158. 
  După ce ai introdus codul corect, apasă pe ok, si caută în tabul de inspect element " <div style="display: none; opacity: 0;"> " în acel element trebuie să găsești link-ul.`;

  function test() {
    const cod = parseInt(prompt("Codul este:", ""));
    if (cod === 61561561561560669420207) {

      setLink(window.location.pathname.replace("Coor", "FindTheWords"));
      setShow(true);
      alert(
        "Codul este corect! Pentru a continua, cauta in codul din consola linkul. Daca il gasesti scrie-l in caseta."
      );
    } else {
      setShow(false);
      alert("Codul nu e corect, mai incearca!");
    }
  }

  const Bulgaria = () => {
    console.log('O parte cod cod este "23216378123681263876 * 0" ');
  };

  const Botosani = () => {
    window.sessionStorage.setItem("Coor", true);
    window.location.pathname = "/FindTheWords";
  };

  const Romania = () => {
    console.log('O parte cod cod este "69420" ');
  };

  const Germania = () => {
    console.log('O parte cod cod este "2 + 2 * 2" ');
  };

  const Anglia = () => {
    console.log('O parte cod cod este "12312312312312 / 2" ');
  };

  const Rusia = () => {
    console.log('O parte cod cod este "23 * 9" ');
    test();
  };

  return (
    <>
      {window.sessionStorage.getItem("steaguri") && (
        <>
          <div
            className="fullPage"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "column",
              padding: "0 100px",
            }}
          >
            <Back />
            <div className="cerinta">
              Observăm că Robik s-a distrat cu informațiile noastre, ne-a
              codificat întreaga secțiune, si avem nevoie de ajutorul tau pentru
              a ajunge la următorul nivel.
            </div>
            <div className="after_big">
              <div className="after_medium">
                <div className="after_small"></div>
              </div>
            </div>
            <div className="rasp">
              <input
                type="text"
                style={{ width: "400px" }}
                placeholder="Scrie ce crezi ca trebuie sa fie scris"
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  switch (
                    text
                      .trim()
                    .toString()
                    .toLowerCase()
                      .split("")
                      .filter((e) => e.trim().length)
                      .join("")
                  ) {
                    case "bulgaria();":
                      Bulgaria();
                      break;
                    case "romania();":
                      Romania();
                      break;
                    case "germania();":
                      Germania();
                      break;
                    case "botosani();":
                      Botosani();
                      break;
                    case "anglia();":
                      Anglia();
                      break;
                    case "rusia();":
                      Rusia();
                      break;
                    case "/findthewords":
                      window.sessionStorage.setItem("Coor", true);
                      alert("Ai raspuns corect!");
                      window.location.pathname = "/FindTheWords";
                      break;
                    default:
                      alert("Nu e corect ceea ce ai introdus");
                      break;
                  }
                }}
              >
                Submit
              </button>
            </div>
            {/* {show1 ? (
              <h1
                style={{
                  zIndex: 4,
                }}
              >
                <Link
                  to="/FindTheWords"
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontFamily: "Lato",
                  }}
                >
                  Urmatorul nivel
                </Link>
              </h1>
            ) : null} */}
          </div>
          {show && <Linky nu={link} />}

          <Help text={txt} />
        </>
      )}
    </>
  );
}

export default Coor;
