import React, { useState } from "react";
import { Link } from "react-router-dom";
import Back from "../components/Back";
import Help from "../components/Help";
 

function Dif() {
  const [drag, setgrag] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [style, setStyle] = useState({
    left: 508,
    top: 591,
  });

  const _dragStart = (e) => {
    setX(e.screenX - e.currentTarget.getBoundingClientRect().left);
    setY(e.screenY - e.currentTarget.getBoundingClientRect().top);
    setgrag(true);
  };

  const _dragging = (e) => {
    if (drag) {
      setStyle({
        left: e.screenX - x,
        top: e.screenY - y,
      });
    }
  };

  const _dragEnd = (e) => {
    setgrag(false);
    setStyle({
      left: e.screenX - x,
      top: e.screenY - y,
    });
  };

  return (
    <>
      {window.sessionStorage.getItem("ShowLinks") && (
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
            <div className="cerinta" style={{ margin: "100px" }}>
              Gaseste diferenta
            </div>
            <div className="images" style={{ margin: "10px" }}>
              <div className="left" id="container">
                <img src={require("../img/fara.png").default} alt="" />
                <img
                  src={require("../img/numai.png").default}
                  onDragStart={(e) => {
                    _dragStart(e);
                  }}
                  onDrag={(e) => {
                    _dragging(e);
                  }}
                  onDragEnd={(e) => {
                    _dragEnd(e);
                  }}
                  style={style}
                  className="im"
                />
                <Link
                  style={{
                    position: "absolute",
                    left: 520,
                    top: 605,
                    width: 20,
                    fontSize: 10,
                    wordBreak: "keep-all",
                    color: "white",
                  }}
                  onClick={() => {
                    window.sessionStorage.setItem("Dif", "true");
                  }}
                  to="/Bule"
                >
                  Urmatorul nivel
                </Link>
              </div>
              <div className="right">
                <img src={require("../img/cu.jpg").default} alt="" />
              </div>
            </div>
            <Help text="nu este" />
          </div>
        </>
      )}
    </>
  );
}

export default Dif;
