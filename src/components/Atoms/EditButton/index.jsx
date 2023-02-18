import React from "react";
import pencil from "../../../assets/svg/pencil.svg";

const SampleButton = ({ onClick }) => {
  // return <button onClick={onClick}>ボタン</button>;
  return <img src={pencil} />;
};
export default SampleButton;
