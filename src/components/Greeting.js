import React from 'react'
import './Greeting.css'
import { SiVisualstudiocode, SiMongodb, SiNotion, SiAirtable, } from 'react-icons/si'
import { FiFigma } from 'react-icons/fi'
import { BsGithub } from 'react-icons/bs'




const Greeting = () => {
  return (
    <div className='greeting-main'>
      
     <div className='tech-icons'>
            
            <i className="fa-brands fa-react" title='I'></i>
            <i className="fa-brands fa-node-js" title='WANT'></i>
            <i className="fa-brands fa-js" title='TO'></i>
            <i className="fa-brands fa-html5" title='THANK'></i>
            <i className="fa-brands fa-css3" title='YOU'></i>
            {/* <i className="fa-brands fa-github" title='github'></i>
            */}
         <div className='react-icons'>
         
          
          <SiNotion className='vscode-icon'title='FOR'/>
          <SiMongodb className='vscode-icon' title='LETTING'/>
          <FiFigma className='vscode-icon' title='ME'/>
          <SiVisualstudiocode className='vscode-icon' title='BE' />
          <SiAirtable className='vscode-icon'title='MYSELF'/>
          <a href='https://github.com/CB-Straub'><button><BsGithub className='vscode-icon4' title='Hola'/></button> </a>  
          <div className='hello-div'>
          <h3 className='hello' title='peekaboo'>Hello</h3>
          </div>
         
          
      </div> 
           
      
    </div>
    
    
    </div>
  )
}

export default Greeting