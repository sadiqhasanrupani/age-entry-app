// React component
import React from "react";

// other components
import UserInfo from "./UserInfo";

// UI component
import Card from "../UI/card";

// Style module
import styles from "./UserList.module.css";

// UserList component
const UserList = (props) => {
  let content;

  if (props.userInfo.length === 0) {
    content = <p className={styles.content}>Please Enter the Data </p>;
  }
  return (
    <Card className={styles.container}>
      <div>
        <h2 className={styles.header2}>User Data</h2>
      </div>
      <div>{content}</div>
      <UserInfo userInfo={props.userInfo} />
    </Card>
  );
};

export default UserList;
