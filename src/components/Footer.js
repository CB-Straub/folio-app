import React from 'react'
import './Footer.css'
import { SiInstagram, SiLinkedin } from 'react-icons/si'

const Footer = () => {
  return (
    <div className='footer'>
        <SiInstagram className='footer-icon'/>
        <p>© Deadwax, LLC </p>  <p>dw-0023-A-1</p>  <h6> ß</h6>
        
        <SiLinkedin className='footer-icon'/>

    </div>
  )
}

export default Footer