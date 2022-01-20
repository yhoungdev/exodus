/* eslint-disable */
/* eslint "plugin1/rule1": "error" */
import React from 'react';
import './header.css'
const Header = (props:any) => {

  return (
    <>
      <header className="header flex justify-between 
      ">

      <span>
          Logo
        </span>

        <nav>
          <ul>
            <li>Home</li>
            <li>Log In</li>
          </ul>
        </nav>
     
      </header>
    </>
  );
};

export default Header;
