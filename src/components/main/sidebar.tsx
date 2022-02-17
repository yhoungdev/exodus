 import react from 'react';
import { GrDocumentTxt, GrDocumentWord } from 'react-icons/gr';
import { VscFilePdf } from 'react-icons/vsc';
import {FiHome} from 'react-icons/fi'
import {AiOutlineFilePdf} from 'react-icons/ai'
import {CgFileDocument} from 'react-icons/cg'
import {TiDocumentText} from 'react-icons/ti'
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
                     <Link to={`/main/home`} className='text'>
                       <span>
                       <FiHome className='mr-2' />
                        Home
                       </span>
                     </Link>
                 </li>

                 <li className="inline-flex">
                     <Link to={`/main/pdf`} className='text'>
                        <span>
                          <AiOutlineFilePdf className='mr-2'/>
                            PDF
                        </span>
                     </Link>
                 </li>
                 <li>
                     <Link to={`/main/docx`} className='text'>
                        <span>
                            <CgFileDocument className='mr-2 '/>
                            Docx
                        </span>
                       
                     </Link>
                 </li>

                 <li>
                     <Link to={`/main/txt`} className='text'>
                      <span>
                        <TiDocumentText className='mr-2'/>
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