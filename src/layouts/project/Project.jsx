import React from 'react'
import './project.css'
import CardProject from '../../components/card_project/CardProject'
import { projects } from '../../db/project'

const Project = () => {
    
  return (
    <>
        <div className="content-all-project-pf">
            <div className="cont-blq-bk cont-project-mob">
                <div className="cont-back-a cont-sct-mbl">
                    <h2>projects</h2>
                </div>
                <div className="cards-project">
                    <CardProject projects={projects}></CardProject>
                </div>
            </div>
        </div>
    </>
  )
}

export default Project
