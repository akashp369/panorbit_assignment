import React, { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Profile from "./Profile";
import CoomingSoon from "./CoomingSoon";

const Home = () => {
  const [account, setAccount] = useState({});
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user_account_details"));
    setAccount(data);
    return ()=>{
        setActiveButton(1)
    }
  }, []);
  return (
    <div className="home_menu">
      <div className="side_Bar">
        <div className="sidebar">
          <button    className={`button ${activeButton === 1 ? 'active' : ''}`}
        onClick={() => handleButtonClick(1)}>Profile</button><br />
          <button  className={`button ${activeButton === 2 ? 'active' : ''}`}
        onClick={() => handleButtonClick(2)}>Posts</button><br />
          <button  className={`button ${activeButton === 3 ? 'active' : ''}`}
        onClick={() => handleButtonClick(3)}>Gallery</button><br />
          <button  className={`button ${activeButton === 4 ? 'active' : ''}`}
        onClick={() => handleButtonClick(4)}>ToDo</button>
         
        </div>
        <div className="main">
            <div className="header">
                <div className="logoname"><p>Profile</p></div>
                <div className="logoimg">
                    <img src={account?.profilepicture} alt="" />
                    <p>{account?.name}</p>
                </div>
            </div>
            <div className="routeforsubheading">
                {activeButton===1 ?<Profile account={account}/>:<CoomingSoon />}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
