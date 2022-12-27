import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Wrapper from './components/wrapper/Wrapper';
import { Routes, Route, Link } from "react-router-dom";
import Page from './components/page/Page';


function App() {
  return (
    // <div className="App">      
               
    //   <Routes>
    //     <Route path='/' element={<Wrapper/>} />
    //     <Route path='/about' element={<Page/>} />
    //     <Route path='/work' element={<Page/>} />
    //   </Routes>
    // </div>
    
    // <>
    //   <nav>
    //     <ul>
    //       <li><Link to="/">Home</Link></li>
    //       <li><Link to="/books">Books</Link></li>
    //     </ul>
    //   </nav>
    // <Routes>
    //   <Route path="/" element={<Wrapper />} />
    //   <Route path="/page" element={<Page />} />
    // </Routes>
    // </>
    <Page />
  );
}

export default App;
