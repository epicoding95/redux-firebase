
import React, { Component } from 'react'
import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';
class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }

    HandleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    HandleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state)
    }
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>

                    <h5 className='grey-text text-darken-3'>create new project</h5>
                    <div className='input-field'>
                        <label htmlFor='title'>Title</label>
                        <input type='text' id='title' onChange={this.HandleChange} />
                    </div>

                    <div className='input-field'>
                        <label htmlFor='password'>Project Content</label>
                        <textarea id='content' className='materialize-textarea'
                            onChange={this.HandleChange}
                        />
                    </div>

                    <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth-0'>Create</button>
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
