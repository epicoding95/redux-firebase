import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
class Dashboard extends Component {
    //first div is for the project list
    //second div is for the notification list
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className=" col s12 m6"></div>
                    <ProjectList />

                    <div className="col s12 m5 offset-m1"></div>
                    <Notifications />
                </div>

            </div>
        )
    }
}

export default Dashboard;