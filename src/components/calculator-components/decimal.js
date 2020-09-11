import React, { useContext } from "react";

import Context from "../../context";

export default function Decimal() {
  const { handleChange } = useContext(Context);

  return (
    <button
      type="button"
      value="."
      className="btn grid-decimal"
      id="decimal"
      onClick={handleChange}
    >
      .
    </button>
  );
}
