import React from "react";
import Back from "../components/Back";
import Help from "../components/Help";

function Dif() {
  return (
    <>
      <Back />
      {window.sessionStorage.getItem("ShowLinks") && (
        <div className="fullPage l">
          <div className="cerinta">Gaseste diferenta</div>
          <div className="images">
            <div className="left">
              <img src={require("../img/cu.jpg").default} alt="" />
              <img src={require("../img/numai.png").default} alt="" />
            </div>
            <div className="right">
              <img src={require("../img/fara.jpg").default} alt="" />
            </div>
          </div>
        </div>
      )}
      <Help text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quos animi laborum voluptatum? At rerum porro, nihil sunt sint perspiciatis sed alias sit voluptates architecto et dolores tempore, fugit minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae et, dolorem id qui dolorum consequatur earum nihil aliquid accusamus eaque repellat soluta facilis aspernatur similique doloremque aliquam aperiam minima voluptates." />
    </>
  );
}
export default Dif;
