import React from 'react'
import{ projects} from '../constants/projectsData'
import ProjectCard from '../components/ProjectCard'
// import './Projects.css'

const Projects = () => {
  return (
    <div className='projects-list'>
      <div className='projects-container'>
        <div className='projects-grid-container'>
        {
                  projects.map(( projects, i ) => {
                    return(
                      <ProjectCard
                        key={i}
                        title={projects.title}
                        image={projects.image}
                        content={projects.content}
                        githubUrl={projects.githubUrl}
                        renderUrl={projects.renderUrl}
                        id={projects.id}
                        banner={projects.banner} />
                    )
                  })
                }
            
        </div>
        <div className='render-alert-banner'>
                 <h4>Free tier Web Services on Render are slow to load. Please be patient </h4>
            </div>
      </div>
    </div>
  )
}

export default Projects