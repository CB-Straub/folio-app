import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Greeting from './components/Greeting';

//components
import Navbar from './components/Navbar';


function App() {
  return (
    
  <Router> 
    <div>
      <Navbar/>
      <Greeting/>  
   </div>
  </Router>
  
    
   
   
  );
}

export default App;
