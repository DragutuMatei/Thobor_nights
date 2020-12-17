// // import React, { useState } from "react";
// // import Timp from './Timp'

// // function Counter({ intrebare }) {
// //   const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
// //     const [interv, setInterv] = useState();
// //     var updatedS = time.s, updatedM = time.m, updatedH = time.h;

// //     const start = () => {
// //         run();
// //         setInterval(run, 100);
// //     }

// //     const run = () => {
// //         if (updatedM === 60) {
// //             updatedH++;
// //             updatedM = 0;
// //         }
// //         if (updatedS === 60) {
// //             updatedM++;
// //             updatedS = 0
// //         }
// //         updatedS++;
// //         return setTime({s:updatedS, m:updatedM, h:updatedH})
// //     }

// //     if (window.sessionStorage.getItem("Start")) {
// //         setTimeout(() => {
// //             start();
// //         }, 1000);
// //     }

// //   return (
// //     <>
// //       <div className="exercitii">
// //               <h2>Intrebarea {intrebare} - <Timp time={time} /></h2>
// //       </div>
// //     </>
// //   );
// // }

// // export default Counter;

// import React from "react";
// import Timp from "./Timp";
// import PropTypes from "prop-types";
// import ReactDOM from "react-dom";

// Counter.propTypes = {
//   DigitFour: PropTypes.number,
//   DigitThere: PropTypes.number,
//   DigitTwo: PropTypes.number,
//   DigitOne: PropTypes.number,
// };

// function Counter({ path }) {
//   var counter;

//   if (window.sessionStorage.getItem(path)) {
//     counter = parseInt(window.sessionStorage.getItem(path));
//     // console.log(counter);
//   } else {
//     counter = 0;
//     // console.log(counter + "Asdasd");
//   }

//   setInterval(function () {
//     if (window.location.pathname === path) {
//       const four = Math.floor(counter / 1000);
//       const three = Math.floor(counter / 100);
//       const two = Math.floor(counter / 10);
//       const one = Math.floor(counter / 1);
//       // console.log(four, three, two, one);
//       counter++;
//       ReactDOM.render(
//         <Timp
//           DigitOne={one}
//           DigitTwo={two}
//           DigitThere={three}
//           DigitFour={four}
//           path={path}
//         />,
//         document.querySelector("#timer")
//       );
//     } else {
//       counter = 0;
//     }
//   }, 1000);
//   return <div id="timer"></div>;
// }

// export default Counter;
