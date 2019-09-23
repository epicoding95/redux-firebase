import React, { Component } from 'react'

const ProjectDetails = (props) => {
    //if you go into the console you can find this id 
    const id = props.match.params.id;
    return (
        <div className='container section project-details'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>project title -{id}</span>
                    <p>sdsd sdsdsdsds</p>
                </div>
                <div className='card-action grey lighten-4 grey-text'></div>
                <div> Posted By kelar</div>
                <div> now@@#$@</div>
            </div>
        </div>
    )
}


export default ProjectDetails
