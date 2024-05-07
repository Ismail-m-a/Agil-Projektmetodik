import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Boka from './Boka';
import Kontakt from './Kontakt';
import About from './About';
import FAQ from './FAQ';
import Login from './Login';
import Register from './Register';

function Switch() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boka" element={<Boka />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
    </Routes>
  );
}

export default Switch;
