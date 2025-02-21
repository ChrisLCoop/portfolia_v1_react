import React from 'react'
import './cardproject.css'
import arrowBlue from '../../assets/icons/blue-arrow.png'

const CardProject = ({projects}) => {
    
    return (
    <>  
        {projects.map((project) => (
            <div key={project.id} className="content-all-comp-crdprj">
                <a className='enlace-project-cctn' href={project.link_website} target='_blank'> 
                    <p>{project.name_project}</p>
                    <img className='img-arrow' src={arrowBlue} alt="" />
                </a>
                <p className='content-inf-prj-dtl'>{project.description_project}</p>
                <div className="content-tool-cards">
                    <div className="card-info-t">
                        {project.tools.map((tool) =>(
                            <p key={tool.id}>{tool.name_tool}</p>
                        ))}
                    </div>
                </div>
            </div>
        ))}
    </>
  )
}

export default CardProject
