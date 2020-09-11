export default function modifyCalcRow(
  exception,
  value,
  displayNum,
  calcRow,
  setCalcRow,
  regex
) {
  if (exception) {
    displayNum.length === 1 && regex.test(displayNum)
      ? setCalcRow(prevValue => prevValue.concat(value))
      : setCalcRow(prevValue =>
          prevValue.concat(displayNum.toString() + value)
        );
  } else {
    let strCopy = calcRow.slice(0, calcRow.length - 1);
    displayNum.length === 1 && regex.test(displayNum)
      ? setCalcRow(strCopy + value)
      : setCalcRow(prevValue =>
          prevValue.concat(displayNum.toString() + value)
        );
  }
}
