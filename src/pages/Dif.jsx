// import React, { useState } from "react";
// import Back from "../components/Back";
// import Help from "../components/Help";

// function Dif() {
//   const [left, setLeft] = useState(148);
//   const [top, setTop] = useState(170);
//   const [diffx, setdiffx] = useState(0);
//   const [diffy, setdiffy] = useState(0);
//   const [dragging, setdrag] = useState(false);
//   const [style, setStyle] = useState({});

//   function dragStart(e) {
//     console.log("asdas");
//     setdiffx(e.screenX - e.currentTarget.getBoundingClientRect().left);
//     setdiffy(e.screenY - e.currentTarget.getBoundingClientRect().top);
//     setdrag(true);
//   }

//   function drag(e) {
//     if (dragging) {
//       setLeft();
//       setTop();
//       setStyle({
//         left: e.screenX - diffx,
//         top:e.screenY - diffy
//       })
//       console.log(left, "    ", top);
//     }
//   }

//   function endD() {
//     setdrag(false);
//   }

//   return (
//     <>
//       {window.sessionStorage.getItem("ShowLinks") && (
//         <>
//           <div
//             className="fullPage l"
//             style={{
//               display: "flex",
//               justifyContent: "space-evenly",
//               flexDirection: "column",
//               padding: "0 100px",
//             }}
//           >
//             <Back />
//             <div className="cerinta" style={{ margin: "20px" }}>
//               Gaseste diferenta
//             </div>
//             <div className="images">
//               <div className="left">
//                 <div
//                   className="im"
//                   style={style}
//                   onDragStart={(e) => {
//                     dragStart(e);
//                   }}
//                   onDrag={(e) => {
//                     drag(e);
//                   }}
//                   onDragEnd={endD}
//                 ></div>
//                 <img src={require("../img/fara.png").default} alt="" />
//                 {/* <img
//                   src={require("../img/numai.png").default}
//                   alt=""
//                   className="im"
//                   id="item"
//                   style={{
//                     zIndex: 5,
//                     left: 0,
//                     top: 0,
//                     position: "absolute",
//                     transform:
//                       "scale(0.14) translate(" + left + "px, " + top + "px)",
//                   }}
//                   onDragStart={(e) => {
//                     dragStart(e);
//                   }}
//                   onDrag={(e) => {
//                     drag(e);
//                   }}
//                   onDragEnd={endD}
//                 /> */}
//               </div>
//               <div className="right">
//                 <img src={require("../img/cu.jpg").default} alt="" />
//               </div>
//             </div>
//           </div>
//           <Help text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quos animi laborum voluptatum? At rerum porro, nihil sunt sint perspiciatis sed alias sit voluptates architecto et dolores tempore, fugit minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae et, dolorem id qui dolorum consequatur earum nihil aliquid accusamus eaque repellat soluta facilis aspernatur similique doloremque aliquam aperiam minima voluptates." />
//         </>
//       )}
//     </>
//   );
// }
// export default Dif;

// import React, { Component } from "react";

// export default class Dif extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       diffX: 0,
//       diffY: 0,
//       dragging: false,
//       styles: {},
//     };

//     this._dragStart = this._dragStart.bind(this);
//     this._dragging = this._dragging.bind(this);
//     this._dragEnd = this._dragEnd.bind(this);
//   }

//   _dragStart(e) {
//     this.setState({
//       diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
//       diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
//       dragging: true,
//     });
//   }

//   _dragging(e) {
//     if (this.state.dragging) {
//       var left = e.screenX - this.state.diffX;
//       var top = e.screenY - this.state.diffY;

//       this.setState({
//         styles: {
//           left: left,
//           top: top,
//         },
//       });
//     }
//   }

//   _dragEnd() {
//     this.setState({
//       dragging: false,
//     });
//   }

//   render() {
//     var classes = "Dialog";
//     return (
//       <div
//         className={classes}
//         style={this.state.styles}
//         onMouseDown={this._dragStart}
//         onMouseMove={this._dragging}
//         onMouseUp={this._dragEnd}
//       >
//         <div className="DialogTitle">My Dialog</div>
//         <div className="Contents">
//           Contents of the Dialog: - one - two - three
//         </div>
//         <div className="closeButton" onClick={this.props.onClose}>
//           Close
//         </div>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import Back from "../components/Back";
import Help from "../components/Help";


export default class Dif extends Component {
  constructor(props) {
    super(props);

    this.state = {
      diffX: 0,
      diffY: 0,
      dragging: false,
      styles: {
        left: window.innerWidth > 1300 ? window.innerWidth * 0.345 : window.innerWidth,
        top: 573,
      },
    };

    this._dragStart = this._dragStart.bind(this);
    this._dragging = this._dragging.bind(this);
    this._dragEnd = this._dragEnd.bind(this);
  }

  _dragStart(e) {
    this.setState({
      diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
      diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
      dragging: true,
    });
  }

  _dragging(e) {
    if (this.state.dragging) {
      var left = e.screenX - this.state.diffX;
      var top = e.screenY - this.state.diffY;

      this.setState({
        styles: {
          left: left,
          top: top,
        },
      });
    }
  }

  _dragEnd() {
    this.setState({
      dragging: false,
    });
  }

  render() {
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
                  <div
                    style={this.state.styles}
                    onMouseDown={this._dragStart}
                    onMouseMove={this._dragging}
                    onMouseUp={this._dragEnd}
                    className="im"
                  ></div>
                </div>
                <div className="right">
                  <img src={require("../img/cu.jpg").default} alt="" />
                </div>
              </div>
              <Help text="nu este"/>
            </div>
          </>
        )}
      </>
      // <div
      //   className={classes}
      //   style={this.state.styles}
      //   onMouseDown={this._dragStart}
      //   onMouseMove={this._dragging}
      //   onMouseUp={this._dragEnd}
      // >
      //   <div className="DialogTitle">My Dialog</div>
      //   <div className="Contents">
      //     Contents of the Dialog: - one - two - three
      //   </div>
      //   <div className="closeButton" onClick={this.props.onClose}>
      //     Close
      //   </div>
      // </div>
    );
  }
}
