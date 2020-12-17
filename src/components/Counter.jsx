// import React, { useState } from "react";
// import Timp from './Timp'

// function Counter({ intrebare }) {
//   const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
//     const [interv, setInterv] = useState();
//     var updatedS = time.s, updatedM = time.m, updatedH = time.h;

//     const start = () => {
//         run();
//         setInterval(run, 100);
//     }

//     const run = () => {
//         if (updatedM === 60) {
//             updatedH++;
//             updatedM = 0;
//         }
//         if (updatedS === 60) {
//             updatedM++;
//             updatedS = 0
//         }
//         updatedS++;
//         return setTime({s:updatedS, m:updatedM, h:updatedH})
//     }

//     if (window.sessionStorage.getItem("Start")) {
//         setTimeout(() => {
//             start();
//         }, 1000);
//     }

//   return (
//     <>
//       <div className="exercitii">
//               <h2>Intrebarea {intrebare} - <Timp time={time} /></h2>
//       </div>
//     </>
//   );
// }

// export default Counter;

import React from "react";
import Timp from "./Timp";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

// var counter = 0;
// setInterval(function () {
//   const four = Math.floor(counter / 1000);
//   const three = Math.floor(counter / 100);
//   const two = Math.floor(counter / 10);
//   const one = Math.floor(counter / 1);
//   console.log(four, three, two, one);
//   counter++;
//   ReactDOM.render(
//     <Timp DigitOne={one} DigitTwo={two} DigitThere={three} DigitFour={four} />,
//     document.querySelector("#timer")
//   );
// }, 1000);

// Counter.propTypes = {
//   DigitFour: PropTypes.number,
//   DigitThere: PropTypes.number,
//   DigitTwo: PropTypes.number,
//   DigitOne: PropTypes.number,
// };

function Counter() {
    return <div id="timer">
      
  </div>;
}

export default Counter;
