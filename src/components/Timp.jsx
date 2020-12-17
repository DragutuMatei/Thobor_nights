import React, { useState } from "react";

function Timp(props) {

    // const [nr, setNr] = useState();

    // if(window.sessionStorage())

  return (
    <>
      <h2>
         Timp trecut: {props.DigitFour % 10}
        {props.DigitThere % 10}
        {props.DigitTwo % 10}
        {props.DigitOne % 10}
      </h2>
    </>
  );
}

let counter = 0;

export default Timp;
