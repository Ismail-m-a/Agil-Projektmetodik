import { useState } from 'react'
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import './App.css';

import { BrowserRouter as Router } from "react-router-dom";
import './App.css'
import Switch from './components/Switch';

function App() {
  

  return (
    <>
    <Router>
      <div>
        <Navigation />
        <Switch />
        <Footer /> 
      </div>

    </Router>
    
    </>
  )
}

export default App
