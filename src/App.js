import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";

const App = () => {
  const [userData, setUserData] = useState([]);

  const getUserDataHandler = (userInfo) => {
    setUserData((prevUserData) => {
      const updateUserData = [...prevUserData];
      updateUserData.push({ ...userInfo });
      return updateUserData;
    });
  };

  return (
    <div>
      <div>
        <AddUsers
          onAddUser={getUserDataHandler}
        />
      </div>
      <div>
        <UserList userInfo={userData} />
      </div>
    </div>
  );
};

export default App;
