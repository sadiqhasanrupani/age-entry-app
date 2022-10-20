import React, { useState } from "react";

// UI components
import AddUsers from "./components/Users/AddUsers";
import PopupModel from "./components/UI/Models/PopupModel";

// other components
import UserList from "./components/Users/UserList";

// style module
import "./App.css";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [userInfoData, setUserInfoData] = useState({});
  const [isModel, setIsModel] = useState(false);
  const [againUserData, setAgainUserData] = useState([]);

  const getUserDataHandler = (userInfo) => {

    setUserInfoData(userInfo);

    setUserData((prevUserData) => {
      const updateUserData = [...prevUserData];
      updateUserData.push({ ...userInfo });
      return updateUserData;
    });
  };

  // const getUserDataHandler = (userInfo) => {
  //   setUserInfoData(userInfo);
  // };

  const displayDataHandler = () => {
    setAgainUserData((prevUserData) => {
      const updateUserData = [...prevUserData];
      updateUserData.push({ ...userInfoData });
      return updateUserData;
    });
  };

  


  return (
    <div>
      {isModel && (
        <PopupModel
          closeModel={setIsModel}
          onPopupModel={userData}
          onGetData={displayDataHandler}
        />
      )}
      <div>
        <AddUsers onAddUser={getUserDataHandler} setIsModel={setIsModel} />
      </div>
      <div>
        <UserList userInfo={againUserData} />
      </div>
    </div>
  );
};

export default App;
