import React from 'react'
import './Navbar.css'

import { NavLink } from 'react-router-dom'



const Navbar = ({click}) => {
  return (
    <nav className='navbar'>

      <div className='navbar__logo'>
       <NavLink to='/' className='name-link' title="Please call me Brian" >CB Straub</NavLink> 
        <p>Web Development / Design </p>
       </div>

    <ul className='navbar__links'>
      <li>
        <NavLink to='/about'>About</NavLink>
      </li>
      <li>
        <NavLink to='/projects'>Projects</NavLink>
      </li>
      <li><NavLink to='/contact'>Contact</NavLink></li>
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