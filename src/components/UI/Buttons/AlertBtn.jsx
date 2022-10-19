import React from "react";

import styles from "./AlertBtn.module.css";

const AlertBtn = (props) => {
  return (
    <>
      <button
        type={"button" || props.type}
        className={`${styles.AlertBtn} ${props.className}`}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </>
  );
};

export default AlertBtn;
