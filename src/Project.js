import React, { Component } from 'react';
import './Project.css';
import projectImage1 from './MemoryGamePreview.png';
import projectImage2 from './DiscordBotPreview.png';
import { ProjectDescriptions, ProjectLinks } from './ProjectDescriptions.js';

class Project extends Component {
    render() {
        const projectChoice = this.props.title === "Memory Game";
        const desc = projectChoice ? ProjectDescriptions[0] : ProjectDescriptions[1];
        return (
            <div className="Project">
                <div className="Project-img-container">
                    <img src={projectChoice ? projectImage1 : projectImage2} alt="projectbox" className="project-img" />
                    <div className="Project-img-overlay">
                        {desc}
                    </div>
                </div>
                <div className="Project-title-container">
                    <a href={projectChoice ? ProjectLinks[0] : ProjectLinks[1]} target="_blank" rel="noreferrer">
                        <h2>{this.props.title}</h2>
                    </a> 
                </div>    
            </div>
        )
    }
}


export default Project;