import React from 'react';
import Header from '../../components/minor/header';
import Roll from '../../assets/images/roll.gif';
import {Link} from 'react-router-dom'
import './home.css';
const Homepage = () => {
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

            <button className="bg-btn-green px-4 py-3 mt-3 rounded">
              <Link to='/main'>
                Get Started
              </Link>
            </button>


          </div>
          {/* end part */}
      </div>
    </>
  );
};

export default Homepage;
