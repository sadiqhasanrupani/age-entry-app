import React from "react";
import ReactDom from "react-dom";

// UI Components
import AlertBtn from "../Buttons/AlertBtn";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import Card from "../Card/card";

// Style module
import styles from "./PopupModel.module.css";

const Backdrop = () => {
  return (
    <>
      <div className={styles.modelBackground} />
    </>
  );
};

const Model = (props) => {
  return (
    <>
      <Card className={styles.popupModel}>
        <div className={styles.header}>
          <h3>Are you sure you wanna continue?</h3>
        </div>
        <div className={styles.body}>
          If you continue then your data will be display on the User Data
          component
        </div>
        <footer className={styles.footer}>
          <AlertBtn className={styles.btn} onClick={props.closeHandler}>
            Cancel
          </AlertBtn>
          <PrimaryBtn
            type={"submit"}
            className={styles.btn}
            onClick={props.continueHandler}
          >
            Continue
          </PrimaryBtn>
        </footer>
      </Card>
    </>
  );
};

const PopupModel = (props) => {
  const closeHandler = () => {
    props.closeModel(false);
  };

  const continueHandler = () => {
    props.closeModel(false);
    let getData = props.onPopupModel;
    props.onGetData(getData);
  };
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop />,
        document.querySelector("#backdrop-element")
      )}
      {ReactDom.createPortal(
        <Model closeHandler={closeHandler} continueHandler={continueHandler} />,
        document.querySelector("#render-element")
      )}
    </>
  );
};

export default PopupModel;
