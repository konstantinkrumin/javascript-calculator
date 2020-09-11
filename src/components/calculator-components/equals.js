import React, { useContext } from "react";

import Context from "../../context";

export default function Equals() {
  const { isCalculated, handleEqual } = useContext(Context);

  return (
    <button
      type="button"
      className="btn grid-equal"
      id="equals"
      disabled={isCalculated}
      onClick={handleEqual}
    >
      =
    </button>
  );
}
