import React, { useContext } from "react";

import Context from "../../../context";

export default function Number(props) {
  const { handleChange } = useContext(Context);

  return (
    <button
      type="button"
      name="number"
      className="btn"
      id={props.id}
      value={props.num}
      onClick={handleChange}
    >
      {props.num}
    </button>
  );
}
