import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        left: 510,
        top: 590,
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
                  <Link
                    style={{
                      position: 'absolute',
                      left: 510,
                      right: 590,
                      fontSize: 10,
                      wordBreak: 'keep-all',
                      color: "white",
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
}
