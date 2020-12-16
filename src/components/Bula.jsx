import React, { useState } from "react";

function Bula({ X, Y }) {
  const [drag, setgrag] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [style, setStyle] = useState({
    left: X ,
    top: Y
  });

  const _dragStart = (e) => {
    setX(e.screenX - e.currentTarget.getBoundingClientRect().left);
    setY(e.screenY - e.currentTarget.getBoundingClientRect().top);
    setgrag(true);
  };

  const _dragging = (e) => {
    if (drag) {
      setStyle({
        left: e.screenX - x,
        top: e.screenY - y,
      });
    }
  };

  const _dragEnd = (e) => {
    setgrag(false);
    setStyle({
      left: e.screenX - x ,
      top: e.screenY - y,
    });
  };

  return (
    <img
      src={require("../img/bula.png").default}
      onDragStart={(e) => {
        _dragStart(e);
      }}
      onDrag={(e) => {
        _dragging(e);
      }}
      onDragEnd={(e) => {
        _dragEnd(e);
      }}
      style={style}
      alt=""
    />
  );
}

export default Bula;
