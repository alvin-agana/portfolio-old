import React, { Component } from 'react';
import './SkillsPage.css';
import Skills from './Skills';

class SkillsPage extends Component {
    render() {
        return (
            <div className="SkillsPage" id="Skills">
                <h1>Skills</h1>
                <h2>I've learned a lot of different languages and have explored different frameworks.</h2>
                <div className="SkillsPage-container"> 
                    <div className="SkillsPage-col">
                        <h2>Languages</h2>
                        <Skills skill="HTML"/>
                        <Skills skill="CSS"/>
                        <Skills skill="JavaScript and Node.js"/>
                        <Skills skill="Python"/>
                        <Skills skill="C++"/>
                        <Skills skill="SQL"/>
                    </div>
                    <div className="SkillsPage-col">
                        <h2>Frameworks and Databases</h2>
                        <Skills skill="React.js"/>
                        <Skills skill="Express.js"/>
                        <Skills skill="Flask" />
                        <Skills skill="MySQL" />
                    </div>
                    <div className="SkillsPage-col">
                        <h2>Concepts</h2>
                        <Skills skill="Object-Oriented Programming"/>
                        <Skills skill="Data Structures"/>
                        <Skills skill="Algorithms"/>
                        <Skills skill="Web Development"/>
                    </div>
                    <div className="SkillsPage-col">
                        <h2>Interpersonal</h2>
                        <Skills skill="Problem Solving"/>
                        <Skills skill="Teamwork and Cooperation"/>
                        <Skills skill="Communication"/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default SkillsPage;