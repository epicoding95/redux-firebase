
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //this is the line that happens when the user submits the form.. create project was passed in through props via mapdispatchtoprops method below.
        // the actual project is coming from the state above
        this.props.createProject(this.state);
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create a New Project</h5>
                    <div className="input-field">
                        <input type="text" id='title' onChange={this.handleChange} />
                        <label htmlFor="title">Project Title</label>
                    </div>
                    <div className="input-field">
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        <label htmlFor="content">Project Content</label>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}
//whatever property we want to add to the props we add to this project
const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

//mapStateToProps always goes first in the connect function so if you dont have one just put null as so
export default connect(null, mapDispatchToProps)(CreateProject);









