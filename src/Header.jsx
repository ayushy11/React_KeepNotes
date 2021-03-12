import React from 'react';
import logo from "./Images/logo.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" width='50' height='50'></img>
        <h1>KeepNotes</h1>
      </div>
    </>
  );
};
export default Header;