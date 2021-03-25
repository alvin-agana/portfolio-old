import React, { Component } from 'react';
import './Project.css';
import projectImage0 from './MemoryGamePreview.png';
import projectImage1 from './DiscordBotPreview.png';
import projectImage2 from './HealthyFoodPreview.png';
import projectImage3 from './homepage.png';
import { ProjectDescriptions, ProjectLinks } from './ProjectDescriptions.js';

class Project extends Component {
    render() {
        var projectImage = 0;
        var desc = "";
        var links = "";
        if (this.props.title === "Memory Game") {
            projectImage = projectImage0
            desc = ProjectDescriptions[0]
            links = ProjectLinks[0];
            
        }
        else if (this.props.title === "Discord Bot") {
            projectImage = projectImage1
            desc = ProjectDescriptions[1]
            links = ProjectLinks[1];
        }
        else if (this.props.title === "HackDavis 2021") {
            projectImage = projectImage2
            desc = ProjectDescriptions[2]
            links = ProjectLinks[2];
        } else {
            projectImage = projectImage3
            desc = ProjectDescriptions[3]
            links = ProjectLinks[3]
        }
    
        return (
            <div className="Project">
                <div className="Project-img-container">
                    <img src={projectImage} alt="projectbox" className="project-img" />
                    <div className="Project-img-overlay">
                        {desc}
                    </div>
                </div>
                <div className="Project-title-container">
                    <a href={links} target="_blank" rel="noreferrer">
                        <h2>{this.props.title}</h2>
                    </a> 
                </div>    
            </div>
        )
    }
}


export default Project;