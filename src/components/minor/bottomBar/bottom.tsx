import React from 'react';
import './bottom.css'
import { Link,  } from 'react-router-dom';
import {VscFilePdf} from 'react-icons/vsc';
import {GrDocumentTxt} from 'react-icons/gr';
import {GrDocumentWord} from 'react-icons/gr';

export const Bottom = () => {
    return (

        <>

            <div className="bottom">

                <Link to={`/main/pdf`}>
                    <div className="pdf">
                        <VscFilePdf/>
                        PDF
                    </div>
                </Link>

                <Link to={`/main/txt`}>
                    <div className="pdf">
                    <GrDocumentTxt/>
                       TXT
                    </div>
                </Link>
                

                <Link to={`/main/docx`}>
                    <div className="pdf">
                        <GrDocumentWord/>
                        DOCX
                    </div>
                </Link>
            </div>
        
        </>

    )
}