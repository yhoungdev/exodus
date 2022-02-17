import React, { useEffect } from 'react';
import Header from '../../components/minor/header';
import Roll from '../../assets/images/roll.gif';
import {Link, useNavigate, Navigate} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import './home.css';
const Homepage = () => {

  //destructure the hool
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const navigate= useNavigate()

  //function to login user 
  const userLogin =()=> {
    loginWithRedirect()
    
      

      
    
    
  }

 
 
  return (
    <>
      <Header/>
      
    

      <div className="container">
          
          <div className="divide">

            <div>
              <img src={Roll} alt="" className="mx-auto w-50" />
            </div>

            <h1>
              A Paradise for your 
              <span className="text-btn-green"> files</span>
            </h1>

            <p>
              A place to share files with family and friends with ease and no stress
            </p>

            <button className="bg-btn-green px-4 py-3 mt-3 rounded"
              onClick={userLogin}
            >
              GET Started
            </button>


          </div>
          {/* end part */}

          {isAuthenticated && ( <Navigate to='/main'/> )}
      </div>
    </>
  );
};

export default Homepage;
