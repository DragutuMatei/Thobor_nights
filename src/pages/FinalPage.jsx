import React, { useState } from "react";
import Back from "../components/Back";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";

function FinalPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [experienta, setExperienta] = useState("");

  init("user_F1FXOrwoiGSWERQpZLjlR");

  const submit = () => {
    const serviceID = "service_0mpw36j";
    const templateID = "template_dd1upta";
    const templateParams = {
      name: name,
      email: email,
      experinta: experienta,
    }; 

    emailjs.send(serviceID, templateID, templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
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
            <div className="titlu">
              <h1>Va multumim pentru participare</h1>
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
                  <button onClick={submit}>Submit</button>
                </div>
              </div>
              <div className="right">
                <textarea
                  required
                  onChange={(e) => {
                    setExperienta(e.target.value);
                  }}
                  placeholder="Cum ti s-a parut aceasta experienta?"
                ></textarea>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}

export default FinalPage;
