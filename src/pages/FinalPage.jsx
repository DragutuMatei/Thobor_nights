import React, { useState } from "react";
import Back from "../components/Back";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";

function FinalPage() {
  const [name, setName] = useState("");
  const [nush, setEmail] = useState("");
  const [discord, setDiscord] = useState("");
  const [experienta, setExperienta] = useState("");

  init("user_F1FXOrwoiGSWERQpZLjlR");

  const submit = () => {
    const serviceID = "service_0mpw36j";
    const templateID = "template_dd1upta";
    const templateParams = {
      name: name,
      nush: nush,
      discord: discord,
      experienta: experienta,
    };

    emailjs.send(serviceID, templateID, templateParams).then(
      () => {
        alert("Trimis!");
      },
      (err) => {
        alert(JSON.stringify(err));
      }
    );
  };

  return (
    <>
      {window.sessionStorage.getItem("Bilet") && (
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
              className="titlu"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1>Vă mulțumim pentru participare</h1>
              <h4 style={{ width: 800, textAlign: "center", color: "white" }}>
                Gata, ne-am recuperat fișierele, multumim de ajutor, te rugăm să
                completezi formularul de mai jos.
              </h4>
            </div>
            <form className="form">
              <div className="left">
                <div className="row">
                  <input
                    required
                    type="text"
                    placeholder="Numele"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="row">
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="row">
                  <input
                    required
                    type="text"
                    placeholder="Discord nickname"
                    onChange={(e) => {
                      setDiscord(e.target.value);
                    }}
                  />
                </div>
                <div className="row">
                  <button onClick={submit}>Submit</button>
                </div>
              </div>
              <div className="right">
                <textarea
                  required
                  onChange={(e) => {
                    setExperienta(e.target.value);
                  }}
                  placeholder="Cum ți s-a parut aceasta experiență?"
                ></textarea>
              </div>
            </form>
            <img
              className="imagineBack"
              src={require("../img/backfinal.png").default}
              alt=""
            />
          </div>
        </>
      )}
    </>
  );
}

export default FinalPage;
