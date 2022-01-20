import React from 'react';
import Notfound from '../../assets/images/404.gif';
export const ErrorScreen = () => {
    return (
        <>
            <div className="container">
                <div className="mx-auto w-50">
                <img src={Notfound} alt="" />

                
                </div>
            </div>
        </>
    )
}