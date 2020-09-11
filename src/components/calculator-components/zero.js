import React, { useContext } from "react";

import Context from "../../context";

export default function Zero() {
  const { handleChange } = useContext(Context);

  return (
    <button
      type="button"
      name="number"
      className="btn grid-zero"
      id="zero"
      value={0}
      onClick={handleChange}
    >
      0
    </button>
  );
}
