import React from "react";

import Display from "./calculator-components/display";
import Clear from "./calculator-components/clear";
import Equals from "./calculator-components/equals";
import Numbers from "./calculator-components/numbers";
import Zero from "./calculator-components/zero";
import Decimal from "./calculator-components/decimal";
import Operations from "./calculator-components/operations";

export default function Calculator() {
  return (
    <div id="calculator-container">
      <Display />
      <Clear />
      <Equals />
      <Numbers />
      <Zero />
      <Decimal />
      <Operations />
    </div>
  );
}
