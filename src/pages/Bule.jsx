import React, { useState } from "react";
import { Link } from "react-router-dom";
import Back from "../components/Back";
import Bula from "../components/Bula";
import Help from "../components/Help";

function Bule() {
  let arrayCuBule = [];
  for (let i = 100; i < window.innerWidth - 170; i += 60) {
    for (let j = 155; j < window.innerHeight - 170; j += 60) {
      arrayCuBule.push({ x: i, y: j });
    }
  }
  let clasa = "";
  setTimeout(() => {
    clasa += "clarNuCheie"
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
            <div className="cerinta" style={{ margin: "50px 0" }}>
              trage an pl bulele
            </div>
            <div className="cheie">
              {arrayCuBule.map((bula) => (
                <Bula key={bula.x / bula.y} X={bula.x} Y={bula.y} />
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
                                    onClick={() => {
                                      window.sessionStorage.setItem(
                                        "Bule",
                                        "true"
                                      );
                                      window.location.pathname = "/Vedere";
                                    }}
                                    style={{
                                      display:"none",
                                      left:
                                        arrayCuBule[
                                          Math.floor(
                                            Math.random() * arrayCuBule.length
                                          )
                                        ].x < 200
                                          ? arrayCuBule[
                                              Math.floor(
                                                Math.random() *
                                                  arrayCuBule.length
                                              )
                                            ].x + 200
                                          : arrayCuBule[
                                              Math.floor(
                                                Math.random() *
                                                  arrayCuBule.length
                                              )
                                            ].x,
                                      top:
                                        arrayCuBule[
                                          Math.floor(
                                            Math.random() * arrayCuBule.length
                                          )
                                        ].y < 200
                                          ? arrayCuBule[
                                              Math.floor(
                                                Math.random() *
                                                  arrayCuBule.length
                                              )
                                            ].y + 200
                                          : arrayCuBule[
                                              Math.floor(
                                                Math.random() *
                                                  arrayCuBule.length
                                              )
                                            ].y,
                                    }}
                                  >
                                    <img
                                      src={require("../img/key.png").default}
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
          <Help text="laksndlaskndlak sndlkansldknas aksndlaskndlak sndlkansldknas aksndlaskndlak sndlkansldknas aksndlaskndlak sndlkansldknas aksndlaskndlak sndlkansldknas aksndlaskndlak sndlkansldknas aksndlaskndlak sndlkansldknas " />
        </>
      )}
    </>
  );
}

export default Bule;
