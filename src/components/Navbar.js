import React from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom'



const Navbar = ({click}) => {
  return (
    <nav className='navbar'>

      <div className='navbar__logo'>
        <h2 title="Please call me Brian">CB Straub</h2>
        <p>Web Development / Design </p>
       </div>

    <ul className='navbar__links'>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/projects'>Projects</Link>
      </li>
      <li><Link to='/contact'>Contact</Link></li>
    </ul>

    <div className='hamburger__menu' onClick={click}>
       <div></div>
        <div></div>
        <div></div>
    </div>
       
   </nav>

  
  )
}

export default Navbar