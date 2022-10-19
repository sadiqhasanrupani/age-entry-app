import React from "react";

import Card from "../UI/Card/card";

import styles from "./UserInfo.module.css";

const UserInfo = (props) => {
  return (
    <div className={styles.container}>
      {props.isOpen && props.userInfo.map((user) => {
        return (
          <div key={user.key}>
            <Card className={styles.userList}>
              <div>
                User's name: <b>"{user.userName.trim()}"</b>
                <br />
                User's age: <b>"{user.age.trim()}"</b>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default UserInfo;
