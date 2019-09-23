import React from 'react';
//the single summary we will pass into thne actual project list which is a list of summarys
const ProjectSummary = () => {
    return (
        <div className='card z-depth-0 project summary'>
            <div className='card-content grey-text-darken-3'>
                <span classNme='card-title'>Project Title</span>
                <p> Posted by kelar</p>
                <p className='grey-text'> now</p>
            </div>
        </div>

    )
}

export default ProjectSummary;