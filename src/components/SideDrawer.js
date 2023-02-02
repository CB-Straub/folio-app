import React from 'react'
import { Link } from 'react-router-dom'

import './SideDrawer.css'

const SideDrawer = ({ show, click }) => {

 //pushes the style for the sidedrawer into a new array to show the style on the page 
  const sideDrawerClass = ['sidedrawer']
  if (show){
    sideDrawerClass.push('show')
  }


  return  <div className={sideDrawerClass.join(' ')}>
      <ul className='sidedrawer__links' onClick={click} >
        <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/projects'>Projects</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
      </ul>

      
    </div>
  
}

export default SideDrawer