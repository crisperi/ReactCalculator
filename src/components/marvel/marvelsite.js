import React, { useState } from "react";
import "./Marvel.css";

const Buttons = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["+", "-", "/", "*", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const buttons = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  return (
    <>
      <div className="App">
        <div className="calculator">
          <div className="outPutScreen ">
            {result ? <span>({result})</span> : ""}
            {calc || "0"}
          </div>
          <div className="operators">
            <button onClick={() => updateCalc("/")}>/</button>
            <button onClick={() => updateCalc("+")}>+</button>
            <button onClick={() => updateCalc("-")}>-</button>
            <button onClick={() => updateCalc("*")}>*</button>
            <button onClick={() => updateCalc(".")}>.</button>
          </div>

          <div className="numbers">
            {buttons()}
            <button onClick={() => updateCalc("0")}>0</button>
            <button>=</button>
            <button>del</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buttons;
