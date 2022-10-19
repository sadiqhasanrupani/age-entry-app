import React from "react";

// styles component
import styles from "./PrimaryBtn.module.css";

const PrimaryBtn = (props) => {
  return (
    <>
      <button
        className={`${styles.PrimaryBtn} ${props.className}`}
        onClick={props.onClick}
        onFocus={props.onFocus}
        type={"button" || props.type}
      >
        {props.children}
      </button>
    </>
  );
};

export default PrimaryBtn;
