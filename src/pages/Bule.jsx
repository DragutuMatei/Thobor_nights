import React, { useState } from "react"; 
import Back from "../components/Back";
import Bula from "../components/Bula";
import Help from "../components/Help";

function Bule() {
  const [display, setdisplay] = useState("none");
  const [lung, setLung] = useState(window.innerWidth);
  let arrayCuBule = [];
  for (let i = 0; i < window.innerWidth -70; i += 60) {
    for (let j = 200; j < window.innerHeight; j += 60) {
      arrayCuBule.push({ x: i, y: j });
    }
  }


  window.onresize = () => {
    setLung(window.innerWidth);
  }

  setTimeout(() => {
    setdisplay("block");
  }, 5000);

  return (
    <>
      {window.sessionStorage.getItem("Dif") && (
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
            <div
              className="cerinta"
              style={{
                margin: "50px 0",
                height: 70,
                fontSize: 30,
                overflow: "hidden",
              }}
            >
              Robik ne-a spus că a lăsat stick-ul cu fișierele intacte într-o
              cameră încuiată, cheia fiind ascunsă, bine-nțeles, printr-o perdea
              de bule. Ajută-ne să găsim cheia.
            </div>
            <div className="cheie">
              {arrayCuBule.map((bula) => (
                <Bula
                  key={
                    Math.random()
                    // bula.x / bula.y === 0.8 ? Math.random() : bula.x / bula.y
                  }
                  X={bula.x}
                  Y={bula.y}
                />
              ))}
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <div>
                              <div>
                                <div>
                                  <div>
                                    <div>
                                      <div></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div>
                                  <div>
                                    <div>
                                      <div></div>
                                    </div>
                                    <div>
                                      <div></div>
                                      <div></div>
                                    </div>
                                    <div></div>
                                  </div>
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div>
                            <div>
                              <div>
                                <div>
                                  <div
                                    className="clarNuCheie"
                                    style={{
                                      display: display,
                                      height: 150,
                                      left:
                                        arrayCuBule[
                                          Math.floor(
                                            Math.random() * arrayCuBule.length
                                          )
                                        ].x <= 200
                                          ? arrayCuBule[
                                              Math.floor(
                                                Math.random() *
                                                  arrayCuBule.length -
                                                  1
                                              )
                                            ].x + 200
                                          : arrayCuBule[
                                              Math.floor(
                                                Math.random() *
                                                  arrayCuBule.length -
                                                  1
                                              )
                                            ].x >= 1320
                                          ? arrayCuBule[
                                              Math.floor(
                                                Math.random() *
                                                  arrayCuBule.length -
                                                  1
                                              )
                                            ].x - 200
                                          : arrayCuBule[
                                              Math.floor(
                                                Math.random() *
                                                  arrayCuBule.length -
                                                  1
                                              )
                                            ].x,
                                      top:
                                        arrayCuBule[
                                          Math.floor(
                                            Math.random() * arrayCuBule.length -
                                              1
                                          )
                                        ].y <= 200
                                          ? arrayCuBule[
                                              Math.floor(
                                                Math.random() *
                                                  arrayCuBule.length -
                                                  1
                                              )
                                            ].y + 200
                                          : arrayCuBule[
                                              Math.floor(
                                                Math.random() *
                                                  arrayCuBule.length -
                                                  1
                                              )
                                            ].y >= 700
                                          ? arrayCuBule[
                                              Math.floor(
                                                Math.random() *
                                                  arrayCuBule.length -
                                                  1
                                              )
                                            ].y - 150
                                          : arrayCuBule[
                                              Math.floor(
                                                Math.random() *
                                                  arrayCuBule.length -
                                                  1
                                              )
                                            ].y,
                                    }}
                                    onMouseEnter={() => {
                                      console.log(
                                        document.querySelector(".clarNuCheie")
                                          .style.left +
                                          "          " +
                                          document.querySelector(".clarNuCheie")
                                            .style.top
                                      );
                                    }}
                                  >
                                    <img
                                      src={require("../img/key.png").default}
                                      onClick={() => {
                                        window.sessionStorage.setItem(
                                          "Bule",
                                          "true"
                                        );
                                        window.location.pathname = "/Vedere";
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div>
                            <div>
                              <div>
                                <div></div>
                              </div>
                            </div>
                            <div>
                              <div>
                                <div>
                                  <div></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div>
                              <div>
                                <div></div>
                              </div>
                            </div>
                            <div>
                              <div>
                                <div>
                                  <div></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div>
                              <div>
                                <div></div>
                              </div>
                            </div>
                            <div>
                              <div>
                                <div>
                                  <div></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div>
                              <div>
                                <div></div>
                              </div>
                            </div>
                            <div>
                              <div>
                                <div>
                                  <div></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div>
                              <div>
                                <div></div>
                              </div>
                            </div>
                            <div>
                              <div>
                                <div>
                                  <div></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div>
                              <div>
                                <div></div>
                              </div>
                            </div>
                            <div>
                              <div>
                                <div>
                                  <div></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Help
            text="
Mută fiecare bulă de pe ecran pentru a găsi cheia, în caz că nu ai un chenar întreg pe ecran te rugăm să resetezi zoom-ul pe site-ul nostru la o rezoluție unde se poate încadra tot chenarul și să dai refresh la pagina.
"
          />
        </>
      )}
    </>
  );
}

export default Bule;
