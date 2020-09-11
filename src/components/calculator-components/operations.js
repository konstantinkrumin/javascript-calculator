import React from "react";

import Operation from "./repeated-components/operation";

export default function Operations() {
  return (
    <div id="operations" className="grid-operations">
      <Operation id="add" symbol="+" />
      <Operation id="subtract" symbol="-" />
      <Operation id="multiply" symbol="*" />
      <Operation id="divide" symbol="/" />
    </div>
  );
}
