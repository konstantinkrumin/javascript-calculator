import React, { useContext } from "react";

import Context from "../../context";

export default function Clear() {
  const { handleDelete } = useContext(Context);

  return (
    <button
      type="button"
      id="clear"
      className="btn grid-clear"
      onClick={handleDelete}
    >
      AC
    </button>
  );
}
