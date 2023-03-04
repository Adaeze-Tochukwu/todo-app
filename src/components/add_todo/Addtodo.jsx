import React from "react";
import "./Addtodo.scss";

export default function Addtodo() {
  return (
    <div className="addtodo">
      <input className="addtodo__input" type="text" placeholder="Add todo" />
    <button className="addtodo__button">+</button>
    </div>
  );
}
