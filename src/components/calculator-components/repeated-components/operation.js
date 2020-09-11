import React, { useContext } from "react";

import Context from "../../../context";

export default function Operation(props) {
  const { handleOperation } = useContext(Context);

  return (
    <button
      type="button"
      name="operation"
      className="btn operation-element"
      id={props.id}
      value={props.symbol}
      onClick={handleOperation}
    >
      {props.symbol}
    </button>
  );
}
