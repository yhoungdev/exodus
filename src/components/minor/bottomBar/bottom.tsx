import React from 'react';
import './bottom.css'
import { NavLink  } from 'react-router-dom';
import {VscFilePdf} from 'react-icons/vsc';
import {GrDocumentTxt} from 'react-icons/gr';
import {GrDocumentWord} from 'react-icons/gr';

export const Bottom = () => {
    return (

        <>

            <div className="bottom">

                <NavLink  to={`/main/pdf`}
                
                >
                    <div className="pdf">
                     <h1 className="icon">
                        <VscFilePdf/>
                     </h1>
                       
                    </div>
                </NavLink>

                <NavLink to={`/main/txt`}>
                    <div className="pdf">

                        <h1 className="icon">
                        <GrDocumentTxt/>
                        </h1>
                       
                    </div>
                </NavLink>
                

                <NavLink to={`/main/docx`}>
                    <div className="pdf">
                        
                    <h1 className="icons">
                        <GrDocumentWord/>
                    
                    </h1>

                    </div>
                </NavLink>
            </div>
        
        </>

    )
}