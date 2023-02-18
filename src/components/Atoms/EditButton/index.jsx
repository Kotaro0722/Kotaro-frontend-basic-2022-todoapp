import React from "react";
import pencil from "../../../assets/svg/pencil.svg";

const SampleButton = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.label}
      <img src={pencil} />
    </button>
  );
};
export default SampleButton;
