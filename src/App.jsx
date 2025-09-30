

import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
// React Router
import { HashRouter, Routes, Route } from "react-router-dom";

// Components

import Signin from './components/Signin';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Shop from './components/Shop';
import Sup from './components/Sup';
import Blog from './components/Blog';

import Login from './components/Login';



function App() {
  const [count, setCount] = useState(0);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <HashRouter>
           <div style={{ backgroundColor: '#75757aff'}}>

      <Routes>
        <Route path="/Login" element={<Login/>} />

        <Route path="/Signin" element={<Signin/>} />
               <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Sup" element={<Sup/>} />
        <Route path="/Shop" element={<Shop/>} />
                <Route path="/Blog" element={<Blog/>} />


      </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
                                  



