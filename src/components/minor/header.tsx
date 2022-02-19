/* eslint-disable */
/* eslint "plugin1/rule1": "error" */
import React from 'react';
import './header.css'
import {FaBars} from 'react-icons/fa';
import {useAuth0} from '@auth0/auth0-react'
import Md_side from './md-sidebar/md-sidebar';


const Header = (props:any) => {

  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

   

  //define style for the container element
  const style = {

    display: 'none',

    
  }


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
          
              {isAuthenticated ?
              //display user image 
              <li>
                <img src={user?.picture} alt="" className='rounded-full w-10'/>
              </li>  :
              <li
              
              onClick={()=>loginWithRedirect()}
              >Login</li>
            }
           
            
            
            
          </ul>

            {
              !isAuthenticated ? 
              <h4 className="hide">
                <FaBars/>
              </h4> :
              <img src={user?.picture} alt="" className='rounded-full w-10 hide'/>

            }

        </nav>
     
      </header>

      <div className="assist" style={style} >
       <Md_side/>
      </div>

      
    </>
  );
};

export default Header;
