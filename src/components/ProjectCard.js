import React from 'react'
// import { Link } from 'react-router-dom'
import { SiGithub} from 'react-icons/si'
import './Projects.css'

const ProjectCard = (props) => {
  return (
    <div className='card'>
        <div className='card-image' style={{
          width: '100%',
          height: '566px',
          backgroundImage: `url('${props.image}')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          position: 'relative',
          borderTopLeftRadius: '2px',
          borderTopRightRadius: '2px',
          paddingTop: "30px",
          paddingBottom: "0px",
          
        }}>

        </div>

        <div className='card-info'>
            <div className='card-title'>
                {/* <Link to={`/${props.id}`}> */}
                  <p>{ props.title }</p>
                {/* </Link> */}

            </div>
            <div className='card-content-section'>
                <p>{props.content}</p>
                <a href={props.githubUrl} target='_blank' rel="noreferrer noopener"><SiGithub className='link-icon' title='Github' /></a>
                <div className='render-icon'   >
                  <a href={props.renderUrl} target='_blank' rel="noreferrer noopener" title="render.com">render</a>
                </div>
                
            </div>
           
        </div>

    </div>
  )
}

export default ProjectCard