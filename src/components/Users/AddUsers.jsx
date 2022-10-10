// React Library.
import React, { useState } from "react";

// UI Components
import Card from "../UI/card";
import AddBtn from "../UI/AddBtn";

// Css Class
import style from "./AddUsers.module.css";

const AddUsers = () => {
  let [count, setCount] = useState(0);

  const AddUserDataHandler = (e) => {
    e.preventDefault();
    setCount((count += 1));
    const userObj = {
      key: count,
      userName: e.target.name.value,
      age: e.target.age.value,
    };
    console.log(userObj);
    
  };
  return (
    <Card>
      <form onSubmit={AddUserDataHandler}>
        <div className={style.addUsersGrid}>
          <div className={`${style.item1} ${style.itemGrid}`}>
            <label htmlFor="userNm">Username</label>
            <input
              type="text"
              id="userNm"
              name="name"
              placeholder="Enter you name"
            />
          </div>
          <div className={`${style.item2} ${style.itemGrid}`}>
            <label htmlFor="age">Age</label>
            <input type="number" name="age" id="age" />
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
