/* eslint-disable */
/* eslint "plugin1/rule1": "error" */
import React from 'react';
import './header.css'
import {FaBars} from 'react-icons/fa'
const Header = (props:any) => {

  return (
    <>
      <header className="header flex justify-between 
      ">

      <span>
          Logo
        </span>

        <nav>

          <ul className="sm:hidden">
            <li>Home</li>
            <li>Log In</li>
          </ul>

          <h4 className="hide">
            <FaBars/>
          </h4>

        </nav>
     
      </header>
    </>
  );
};

export default Header;
