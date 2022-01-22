import React from 'react';
import Header from '../../../components/minor/header';
import {Routes, Link, Route, BrowserRouter as Router, Outlet} from 'react-router-dom'
import SideBar from '../../../components/main/sidebar';
import { Bottom } from '../../../components/minor/bottomBar/bottom';

//for menu panel



export const Main =() => {
    return (
        <>
           
            <main>

                {/* sidebar */}
               
                <Header/>
                <div className="container-fluid">

                

                  <div className="inner row">
                  
                    <div className="col-2 sm:hidden ">
                     <SideBar/>
                    </div>

                    <div className="col-10">
                        <Outlet/>
                    </div>

                  </div>
    


                </div>
               

            </main>

            <Bottom/>

        </>
    )
}

