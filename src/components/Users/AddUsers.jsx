// React Library.
import React, { useState } from "react";

// UI Components
import Card from "../UI/card";
import AddBtn from "../UI/AddBtn";

// Css Class
import style from "./AddUsers.module.css";

const AddUsers = (props) => {
  let [count, setCount] = useState(0);

  // Data Entry State.
  const [userEnteredData, setUserEnteredData] = useState("");
  const [ageEnteredData, setAgeEnteredData] = useState("");

  //Validation States
  const [usernameValid, setUsernameValid] = useState(true);
  const [ageValid, setAgeValid] = useState(true);

  const AddUserDataHandler = (e) => {
    e.preventDefault();

    if (userEnteredData.trim().length === 0) {
      setUsernameValid(false);
    }

    if (
      ageEnteredData.trim().length === 0 ||
      +ageEnteredData < 1 ||
      isNaN(+ageEnteredData) === true
    ) {
      setAgeValid(false);
      setAgeEnteredData("");
      return;
    }

    setCount((count += 1));

    const userObj = {
      key: count.toString(),
      userName: userEnteredData,
      age: ageEnteredData,
    };

    props.onAddUser(userObj);

    setUserEnteredData("");
    setAgeEnteredData("");
  };

  const usernameChangeHandler = (e) => {
    setUserEnteredData(e.target.value);

    if (userEnteredData.trim().length > 0) {
      setUsernameValid(true);
    }
  };

  const ageChangeHandler = (e) => {
    setAgeEnteredData(e.target.value);
    if (ageEnteredData.trim().length > 0) {
      setAgeValid(true);
      return;
    }
    if (+ageEnteredData < 1) {
      setAgeValid(true);
    }
  };

  return (
    <Card>
      <form onSubmit={AddUserDataHandler}>
        <div className={style.addUsersGrid}>
          <div
            className={`${style.item1} ${style.itemGrid} ${
              !usernameValid /* Default= true */ ? style.isValid : ""
            }`}
          >
            <label htmlFor="userNm">Username</label>
            <div className={`${style.input}`}>
              <input
                type="text"
                id="userNm"
                name="name"
                value={userEnteredData}
                placeholder="Enter you name"
                onChange={usernameChangeHandler}
              />
            </div>
          </div>
          <div
            className={`${style.item2} ${style.itemGrid} ${
              !ageValid /* Default= true */ ? style.isValid : ""
            }`}
          >
            <label htmlFor="age">Age</label>
            <div className={style.input}>
              <input
                type="text"
                name="age"
                id="age"
                value={ageEnteredData}
                placeholder="Enter your Age"
                onChange={ageChangeHandler}
              />
            </div>
          </div>
          <div className={style.item3}>
            <AddBtn type="submit" className={style.AddUser}>
              Add User
            </AddBtn>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default AddUsers;
