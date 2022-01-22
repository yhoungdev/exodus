import React from 'react';
import './bottom.css'
import { Link, NavLink  } from 'react-router-dom';
import {VscFilePdf} from 'react-icons/vsc';
import {GrDocumentTxt} from 'react-icons/gr';
import {GrDocumentWord} from 'react-icons/gr';

export const Bottom = () => {
    return (

        <>

            <div className="bottom">

                <NavLink className="active" to={`/main/pdf`}
                
                >
                    <div className="pdf">
                        <VscFilePdf/>
                        PDF
                    </div>
                </NavLink>

                <NavLink to={`/main/txt`}>
                    <div className="pdf">
                    <GrDocumentTxt/>
                       TXT
                    </div>
                </NavLink>
                

                <NavLink to={`/main/docx`}>
                    <div className="pdf">
                        <GrDocumentWord/>
                        DOCX
                    </div>
                </NavLink>
            </div>
        
        </>

    )
}