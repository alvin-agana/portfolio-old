import React, { Component } from 'react';
import './ProjectsPage.css'
import Project from './Project.js';
class ProjectsPage extends Component {
    render() {
        return (
            <div className="ProjectsPage" id="Projects">
                <h1>Projects</h1>
                <h2>Check out some of my projects. Hover over them for a description, and click on their names to go to the github link.
                </h2>
                <div className="project-container">
                    <Project title="Memory Game" />
                    <Project title="Discord Bot" />
                    <Project title="HackDavis 2021" />
                </div>
            </div>
        )
    }
}

export default ProjectsPage;