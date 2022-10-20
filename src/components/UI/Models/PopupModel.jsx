import React from "react";

// UI Components
import AlertBtn from "../Buttons/AlertBtn";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import Card from "../Card/card";

// Style module
import styles from "./PopupModel.module.css";

const PopupModel = (props) => {
  const closeHandler = () => {
    props.closeModel(false);
  };

  const continueHandler = () => {
    // props.openHandler(true);
    props.closeModel(false);
    let getData = props.onPopupModel;
    props.onGetData(getData);
  };

  return (
    <>
      <div className={styles.modelBackground}>
        <Card className={styles.popupModel}>
          {/* <div className={styles.crossBtn}>
            <AlertBtn onClick={closeHandler}>X</AlertBtn>
          </div> */}
          <div className={styles.header}>
            <h3>Are you sure you wanna continue?</h3>
          </div>
          <div className={styles.body}>
            If you continue then your data will be display on the User Data
            component
          </div>
          <footer className={styles.footer}>
            <AlertBtn className={styles.btn} onClick={closeHandler}>
              Cancel
            </AlertBtn>
            <PrimaryBtn type={'submit'} className={styles.btn} onFocus={continueHandler}>
              Continue
            </PrimaryBtn>
          </footer>
        </Card>
      </div>
    </>
  );
};

export default PopupModel;
