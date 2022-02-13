 import react from 'react';
import { GrDocumentTxt, GrDocumentWord } from 'react-icons/gr';
import { VscFilePdf } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import './sidebar.css'
 const SideBar = () => {
    return (
        <>

        <div className="sidebar bg-btn-green">
            <div className="logo-main">
                        Logo
            </div>

            <nav>   
                <ul>

                <li>
                     <Link to={`/main/home`}>
                       Home
                     </Link>
                 </li>

                 <li className="inline-flex">
                     <Link to={`/main/pdf`}>
                        <span>
                          <VscFilePdf className='mr-2'/>
                            PDF
                        </span>
                     </Link>
                 </li>
                 <li>
                     <Link to={`/main/docx`}>
                        <span>
                            <GrDocumentWord className='mr-2 text-light' />
                            Docx
                        </span>
                       
                     </Link>
                 </li>

                 <li>
                     <Link to={`/main/txt`}>
                      <span>
                        <GrDocumentTxt className='mr-2'/>
                         Txt
                      </span>
                     
                     </Link>
                 </li>
                </ul>

            </nav>




          </div>

        </>
    )
}

export default SideBar;