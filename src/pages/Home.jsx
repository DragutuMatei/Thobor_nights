import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typewrier from "typewriter-effect";

function Home() {
  const [instructiune, setInstructiune] = useState(false);

  let style = {
    width: 0,
    height: 0,
  };

  function big() {
    style = {
      width: "800px",
      height: "300px",
    };
  }

  return (
    <>
      <div className="fullPage" style={{paddingBottom:0}}>
        <div className="thoborBackground">
          <div className="banner">
            <h1>
              <Typewrier
                onInit={(type) => {
                  type
                    .typeString(
                      "Bine ai venit la Scavenger Hunt-ul organizat de Thobor"
                    )
                    .start();
                }}
              />
            </h1>
          </div>
        </div>

        {instructiune && big()}

        <div className="info1" style={style}>
          <i
            className="far fa-times-circle"
            onClick={() => setInstructiune(false)}
          ></i>
          <div className="text">
            <p>
              Robik iar ne-a încurcat codurile și fișierele, ajuta-ne sa refacem
              informațiile lipsa prin aceste puzzle-uri.
            </p>
          </div>
        </div>

        <div className="optiuni bac">
          <div className="start o">
            <h2>
              <Link
                to="/GasesteLinkul"
                onClick={() => {
                  window.sessionStorage.setItem("Start", "true");
                }}
              >
                Start
              </Link>
            </h2>
          </div>
          <div className="instructiuni o">
            <h2
              onClick={() => {
                setInstructiune(true);
              }}
            >
              instructiuni
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
