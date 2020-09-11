import React from "react";

import Number from "./repeated-components/number";

export default function Numbers() {
  return (
    <div id="numbers" className="grid-numbers">
      <Number id="seven" num={7} />
      <Number id="eight" num={8} />
      <Number id="nine" num={9} />
      <Number id="four" num={4} />
      <Number id="five" num={5} />
      <Number id="six" num={6} />
      <Number id="one" num={1} />
      <Number id="two" num={2} />
      <Number id="three" num={3} />
    </div>
  );
}
