import { Routes, Route } from 'react-router-dom';
import './App.css';
import React, { useState} from 'react'

//components
import Navbar from './components/Navbar';
import Greeting from './components/Greeting';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';
import Footer from './components/Footer';


//pages 
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact'

function App() {

  const [sideToggle, setSideToggle] = useState(false)


  return (
   
   
   <>
   
    <Navbar click={() => setSideToggle(true)}/>
    <SideDrawer show={sideToggle} click ={ () => setSideToggle(false)} />
    <Backdrop show={sideToggle} click ={ () => setSideToggle(false)} />
 
    <main>
    <Routes>
     <Route path='/' exact element={<Greeting/>}/>
     <Route path='/about' exact element={<About/>}/>
     <Route path ='/projects' exact element={<Projects/>} />
     <Route path='/contact'  exact element ={<Contact/>}/> 
    </Routes>
    <Footer/>
    </main>
   
   
    
   </>
   
   
  );
}

export default App;
