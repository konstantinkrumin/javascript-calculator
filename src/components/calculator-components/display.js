import React, { useContext } from "react";

import Context from "../../context";

export default function Display() {
  const { calcRow, displayNum } = useContext(Context);

  return (
    <div id="display-container" className="grid-display">
      <p id="formula-display">{calcRow}</p>
      <p id="display">{displayNum}</p>
    </div>
  );
}
