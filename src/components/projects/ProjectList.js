import React from 'react';
import ProjectSummary from './ProjectSummary';
//this is destructuring directly in th parameter to pull projects out
const ProjectList = ({ projects }) => {
    return (
        <div className='project-list section'>
            {projects && projects.map(project => {
                return (
                    <ProjectSummary project={project} key={project.id} />
                )
            })}
        </div>
    )
}

export default ProjectList;