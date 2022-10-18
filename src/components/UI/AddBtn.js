import React from "react";
import style from "./AddBtn.module.css";

const AddBtn = (props) => {
  return (
    <button
      className={`${style.AddBtn} ${props.className}`}
      onClick={props.onClick}
      type={props.type || 'button'}
    >
      {props.children}
    </button>
  );
};

export default AddBtn;
