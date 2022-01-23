import React, {useEffect} from 'react';

import './App.css';
// eslint-disable-next-line no-unused-vars
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Homepage from './pages/Homepage/home';
import {ErrorScreen} from './pages/404/404';
import {Main} from './pages/auth/main/main';
import Pdf from './pages/auth/routes/pdf/pdf';
import Docx from './pages/auth/routes/docx/docx';
import Txt from './pages/auth/routes/txt/txt';
import Home from './pages/home/home'



// eslint-disable-next-line
function App() {

  useEffect(()=>{
    //check if Service is available
    'serviceWorker' in navigator ? 
      navigator.serviceWorker.register('./sw.js')
      : ''

      
  },[])

  return (
    <div className="App">
       
      {/* //eslint-disable-next-line require */}
      <Router >
      <Routes>
        
        
        <Route path="/" element={<Homepage/>} />
        <Route path="/main" element={<Main/>}>

          <Route path="pdf" element={<Pdf/>}/>
          <Route path="docx" element={<Docx/>}/>
          <Route path="txt" element={<Txt/>}/>
          <Route path="home" element={<Home/>}/>
          
        </Route>
 
        <Route path="*" element={<ErrorScreen/>} />
     </Routes>
      </Router>
    
    </div>
    
  );
}

export default App;
