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

  function test() {
    const cod = parseInt(prompt("Codul este:", ""));
    if (cod === 69420615615615615660207) {
      setLink(window.location.pathname.replace("Coor", "FindTheWords"));
      setShow(true);
      alert(
        "Codul este corect! Pentru a continua cauta in codul din consola linkul. Daca il gasesti scrie-l in inputul ala"
      );
    } else {
      setShow(false);
      alert("Codul nu e corect mai incearca!");
    }
  }

  const Bulgaria = () => {
    console.log('O parte cod cod este "23216378123681263876 * 0" ');
    test();
  };

  const Romania = () => {
    console.log('O parte cod cod este "69420" ');
    test();
  };

  const Germania = () => {
    console.log('O parte cod cod este "2 + 2 * 2" ');
    test();
  };

  const Anglia = () => {
    console.log('O parte cod cod este "12312312312312 / 2" ');
    test();
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
              Cautati codul ascuns in care veti afla urmatoarea instructiune
              pentru a trece la nivelul urmator.
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
                  switch (text) {
                    case "Bulgaria();":
                      Bulgaria();
                      break;
                    case "Romania();":
                      Romania();
                      break;
                    case "Germania();":
                      Germania();
                      break;
                    case "Anglia();":
                      Anglia();
                      break;
                    case "Rusia();":
                      Rusia();
                      break;
                    case "/FindTheWords":
                      window.sessionStorage.setItem("Coor", true);
                      setShow1(true);
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
            {show1 ? (
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
            ) : null}
          </div>
          {show && <Linky nu={link} />}

          <Help
            text='Cum să cauți un cod ascuns? Simplu, astăzi veți învăța puțin "hacking". 
Pentru a verifica un cod din spatele unui site trebuie să folosiți Inspect Element. Cum faceți asta? Simplu:

    1. Faceți clic dreapta oriunde pe pagina web și, în partea de jos a meniului care apare, veți vedea „Inspectați”. Faceți clic pe asta.
    2. Faceți clic pe meniul hamburger (pictograma cu 3 puncte stivuite) din extrema dreaptă a barei de instrumente Google Chrome, faceți clic pe Mai multe instrumente, apoi selectați Instrumente pentru dezvoltatori. Alternativ, în meniul fișier, faceți clic pe Vizualizare -> Dezvoltator -> Instrumente pentru dezvoltatori.
    3. Preferați comenzile rapide de la tastatură? Apăsați CMD + Shift + I pe un Mac sau F12 pe un PC pentru a deschide Inspect Elements fără a face clic pe nimic.

Nu ți se potrivesc instrucțiunile? Caută pe google "How to Inspect element"'
          />
        </>
      )}
    </>
  );
}

export default Coor;
