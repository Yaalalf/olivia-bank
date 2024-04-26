"use client";

import { useState } from "react";
import "./desktop.css";

export default function TestView() {
  const [number, setNumber] = useState(0);
  let value = 0;

  function onClickState() {
    setNumber((value) => value + 1);
  }

  function onClickNormalValue() {
    console.log(value);
    value++;
  }

  return (
    <>
      <div className="TestView">
        <span>Hola {number}</span>
        <button onClick={onClickState}>Add State</button>
        <button onClick={onClickNormalValue}>Add Normal Value</button>
      </div>
    </>
  );
}
