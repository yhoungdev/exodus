/* eslint-disable */
/* eslint "plugin1/rule1": "error" */
import React from 'react';
import './header.css'
import {FaBars} from 'react-icons/fa';
import {useAuth0} from '@auth0/auth0-react'


const Header = (props:any) => {

  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <header className="header flex justify-between 
      ">

      <span>
          Logo
        </span>

        <nav>

          <ul className="sm:hidden">
            {console.warn(user)}
          
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
