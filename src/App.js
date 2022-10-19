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

  const [isModel, setIsModel] = useState(false);
  const[isOpen, setIsOpen] = useState(false);

  const getUserDataHandler = (userInfo) => {
    setUserData((prevUserData) => {
      const updateUserData = [...prevUserData];
      updateUserData.push({ ...userInfo });
      return updateUserData;
    });
  };

  return (
    <div>
      {isModel && <PopupModel closeModel={setIsModel} openHandler={setIsOpen} />}
      <div>
        <AddUsers onAddUser={getUserDataHandler} 
        setIsModel={setIsModel}
        />
      </div>
      <div>
        <UserList userInfo={userData} isOpen={isOpen}
        />
      </div>
    </div>
  );
};

export default App;
