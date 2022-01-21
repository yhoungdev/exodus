 import react from 'react';
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
                     <Link to={`/main/pdf`}>
                       PDF
                     </Link>
                 </li>
                 <li>
                     <Link to={`/main/docx`}>
                       Docx
                     </Link>
                 </li>

                 <li>
                     <Link to={`/main/txt`}>
                       Txt
                     </Link>
                 </li>
                </ul>

            </nav>




          </div>

        </>
    )
}

export default SideBar;