import React from 'react'
import './Footer.css'

import {SiInstagram, SiLinkedin } from 'react-icons/si'



const Footer = () => {
  return (
    <div className='container__footer'>
        <div className='container-container'>
             <div className='icon-container'>
                <a href='https://www.instagram.com/vanomoose' target='_blank' rel='noreferrer noopener'>
            <button> 
                <SiInstagram className='social__icons'/>
            </button>
        </a>
        <a href='https://www.linkedin.com/in/cbstraub?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBkf16mLESDC3XuUBNW39NA%3D%3D' target='_blank' rel='noreferrer noopener'>
            <button> 
                <SiLinkedin className='social__icons'/>
            </button>
        </a>
        </div>
       
            <div className='deadwax-container'>
            <p>©Deadwax, Inc  dw-oo23-A-1 ß </p>
             </div>


        </div>
       
           
 </div>
  )
}

export default Footer