// import React, { useState } from "react";

// function Timp(props) {
//   const sec =
//     (props.DigitFour % 10).toString() +
//     (props.DigitThere % 10).toString() +
//     (props.DigitTwo % 10).toString() +
//     (props.DigitOne % 10).toString();

//   const nr = sec.split("");

//   // console.log(nr);

//   let n = "";

//   for (let i = 0; i < nr.length; i++) {
//     if (nr[i] !== 0) {
//       n += nr[i].toString();
//     }
//   }

//   // console.log(parseInt(n));

//   window.sessionStorage.setItem(props.path, parseInt(n));

//   return (
//     <>
//       <h2>
//         Timp trecut: {props.DigitFour % 10}
//         {props.DigitThere % 10}
//         {props.DigitTwo % 10}
//         {props.DigitOne % 10}
//       </h2>
//     </>
//   );
// }

// export default Timp;
