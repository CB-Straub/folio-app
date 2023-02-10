import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about-container'>
         <div className='about-content'>

            {/* <h3>About</h3> */}
            <p> Hello. I'm Brian, a Web Developer from Denver, Colorado. 
                  I am certified as a full-stack web developer but I prefer to work on the front-end side of the house, using React and associated frameworks.    </p>
             <br />
            <p>You can learn more about my professional life by visiting my profile on LinkedIn, just click on the icon at the bottom right of the page.</p>  
          
               <br/> 
              <p>I like to play guitar, garden vegetables, cook foods, read books, collect vinyl records, sit by fires and build cool and useful things. 
                To get to know me through social media, click on the instagram icon on the bottom left. </p>

              <p>Please reach out directly using the contact form if you'd like a copy of my resume.</p>
        </div>
    </div>
   
    
  )
}

export default About