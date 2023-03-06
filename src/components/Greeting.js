import React from 'react'
import './Greeting.css'
import { SiVisualstudiocode, SiMongodb, SiNotion, SiAirtable, } from 'react-icons/si'
import { FiFigma } from 'react-icons/fi'
import { BsGithub } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'




const Greeting = () => {
  return (
    <div className='greeting-main'>
      
     <div className='tech-icons'>
            
            <i className="fa-brands fa-react" title='React'></i>
            <i className="fa-brands fa-node-js" title='Node.js'></i>
            <i className="fa-brands fa-js" title='Javascript'></i>
            <i className="fa-brands fa-html5" title='HTML5'></i>
            <i className="fa-brands fa-css3" title='CSS3'></i>
            {/* <i className="fa-brands fa-github" title='github'></i>
            */}
         <div className='react-icons'>
         
          
          <SiNotion className='vscode-icon'title='Notion'/>
          <SiMongodb className='vscode-icon' title='MonogDB'/>
          <FiFigma className='vscode-icon' title='Figma'/>
          <SiVisualstudiocode className='vscode-icon' title='Visual Studio Code' />
          <SiAirtable className='vscode-icon'title='Airtable'/>
          <a href='https://github.com/CB-Straub'target='_blank' rel="noreferrer noopener"><button><BsGithub className='vscode-icon4' title='Hola'/></button> </a>  
          <div className='hello-div'>
         
          <NavLink to='/about' className="hello"><h3 className='hello' title='peekaboo'>Hello</h3></NavLink>
          </div>
         
          
      </div> 
           
      
    </div>
    
    
    </div>
  )
}

export default Greeting