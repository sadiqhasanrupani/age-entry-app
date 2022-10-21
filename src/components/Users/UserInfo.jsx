import React, { Fragment } from "react";

import Card from "../UI/Card/card";

import styles from "./UserInfo.module.css";

const UserInfo = (props) => {
  return (
    <Fragment className={styles.container}>
      {props.userInfo.map((user) => {
        return (
          <div key={user.key}>
            <Card className={styles.userList}>
              <div>
                User's name: <b>{user.userName.trim()}</b>
                <br />
                User's age: <b>{user.age.trim()}</b>
              </div>
            </Card>
          </div>
        );
      })}
    </Fragment>
  );
};

export default UserInfo;
