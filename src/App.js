import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React, { useState} from 'react'
//components
import Navbar from './components/Navbar';
import Greeting from './components/Greeting';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';



function App() {

  const [sideToggle, setSideToggle] = useState(false)


  return (
    
  <Router> 
   
    <Navbar click={() => setSideToggle(true)}/>
    <Greeting/> 
    <SideDrawer show={sideToggle} click ={ () => setSideToggle(true)} />
    <Backdrop show={sideToggle} click ={ () => setSideToggle(false)} />
    
  </Router>
  
    
   
   
  );
}

export default App;
