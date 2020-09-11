import React, { useState } from "react";
import "./styles/main.scss";

import modifyCalcRow from "./helper/modifyCalcRow";

import Interface from "./components/interface";

import Context from "./context";

export default function App() {
  // defines the max length of number that could be showed in the output
  const total_precision_num = 12;

  // max length of separate nums entered
  const max_length = 15;
  // max length of a calc row to calculate
  const max_length_calc_row = 40;

  const DEFAULT_VALUE = 0;
  const DEFAULT_CALC_ROW = "";
  const DEFAULT_IS_CALCULATED = false;
  let regex = /\+|-|\*|\//;

  const [calcRow, setCalcRow] = useState(DEFAULT_CALC_ROW);
  const [displayNum, setDisplayNum] = useState(DEFAULT_VALUE);
  const [isCalculated, setIsCalculated] = useState(DEFAULT_IS_CALCULATED);

  function handleChange(event) {
    const { value } = event.target;

    if (isCalculated) {
      handleDelete();
    }

    if (
      (displayNum.length < max_length || displayNum.length === undefined) &&
      calcRow.length < max_length_calc_row
    ) {
      if (
        value === "." &&
        !displayNum.toString().includes(".") &&
        !regex.test(displayNum)
      ) {
        setDisplayNum((prevValue) => prevValue.toString().concat("."));
      } else if (regex.test(displayNum)) {
        setDisplayNum(value);
      } else if (value !== ".") {
        setDisplayNum((prevValue) => {
          const prevValStr = prevValue.toString();
          let numbersAfterDecimal = 0;
          if (prevValStr.includes(".")) {
            numbersAfterDecimal = prevValStr.split(".")[1].length;
            // for current value
            numbersAfterDecimal++;
          }
          return parseFloat(prevValStr.concat(value)).toFixed(
            numbersAfterDecimal
          );
        });
      }
    }
  }

  function handleOperation(event) {
    const { value } = event.target;

    if (calcRow === "") {
      setCalcRow((prevValue) =>
        prevValue.concat(displayNum.toString() + value)
      );
      setDisplayNum(value);
    } else {
      if (isCalculated) {
        setCalcRow(displayNum + value);
        setDisplayNum(value);
        setIsCalculated(false);
      }

      let lastEntry = calcRow[calcRow.length - 1];
      let beforeLastEntry = calcRow[calcRow.length - 2];

      if (
        regex.test(lastEntry) &&
        regex.test(beforeLastEntry) &&
        value !== lastEntry
      ) {
        setCalcRow(
          (prevValue) =>
            prevValue.slice(0, calcRow.indexOf(beforeLastEntry)) + value
        );
        setDisplayNum(value);
      } else if (regex.test(lastEntry)) {
        switch (value) {
          case "+":
          case "*":
          case "/":
            modifyCalcRow(false, value, displayNum, calcRow, setCalcRow, regex);
            break;
          case "-":
            /-/.test(lastEntry)
              ? modifyCalcRow(
                  false,
                  value,
                  displayNum,
                  calcRow,
                  setCalcRow,
                  regex
                )
              : modifyCalcRow(
                  true,
                  value,
                  displayNum,
                  calcRow,
                  setCalcRow,
                  regex
                );
            break;
          default:
            break;
        }
        setDisplayNum(value);
      }
    }
  }

  function handleEqual() {
    let totalRow = calcRow.slice(0);

    regex.test(displayNum)
      ? (totalRow = totalRow.slice(0, totalRow.length - 1))
      : (totalRow = totalRow.concat(displayNum));

    let total = eval(totalRow);
    total =
      total.toString().length >= total_precision_num
        ? (total = total.toPrecision(total_precision_num))
        : total;

    setCalcRow(totalRow + " = " + total);
    setDisplayNum(total);
    setIsCalculated(true);
  }

  function handleDelete() {
    setCalcRow(DEFAULT_CALC_ROW);
    setIsCalculated(DEFAULT_IS_CALCULATED);
    setDisplayNum(DEFAULT_VALUE);
  }

  return (
    <Context.Provider
      value={{
        calcRow,
        isCalculated,
        displayNum,
        handleDelete,
        handleChange,
        handleEqual,
        handleOperation
      }}
    >
      <Interface />
    </Context.Provider>
  );
}
