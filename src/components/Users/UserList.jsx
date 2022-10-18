// React component
import React from "react";

// other components
import UserInfo from "./UserInfo";

// UI component
import Card from "../UI/card";

// UserList component
const UserList = (props) => {

  let content = '';

  if (props.userInfo === 0) {
    console.log("hii");
    content = <p>Please Enter the Data </p>;
  }

  return (
    <Card>
      <div>
        <h2>User Data</h2>
      </div>
      <div>{content}</div>
      <UserInfo userInfo={props.userInfo} />
    </Card>
  );
};

export default UserList;
