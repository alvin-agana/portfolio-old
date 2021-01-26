import React, { Component } from 'react';
import './AboutPage.css';
class AboutPage extends Component {
    render() {
        return (
            <div className="AboutPage" id="About">
                <h1 id="AboutPage-title">Profile</h1>
                <div className="AboutPage-box">
                    <div className="AboutPage-Me">
                        <h1>About Me</h1>
                        <p>
                            Hi, I am Alvin!<br/>
                            I am 21 years old, and I am junior college student at UC Davis from Union City, CA.<br/><br/>
                            I'm an independent, hard-working student full of curiosity to learn the latest technologies with a passion to help others. With my growing skillset,
                            I hope to work with teams to solve big problems that companies face, build
                            modern applications, and connect with like-minded individuals that share the same drive.<br/><br/>
                            If you like what I can bring to the table, get in touch with me and let's work together. Thanks, and enjoy your stay!
                        </p>
                    </div>
                    <div className="AboutPage-Education">
                        <h1>Education</h1>
                        <p>
                            B.S. in Computer Science - University of California, Davis <br/>
                            Davis, CA - September 2020 to June 2022<br/>
                            <b>GPA: 3.76</b><br/><br/>
                            Ohlone Community College<br/>
                            Fremont/Newark, CA - August 2017 to May 2020<br/><br/>
                        </p>
                        <h1>Coursework</h1>
                        <p>
                            Algorithms and Design II, Android Development, Algorithms and Design, Computer Architecture, Discrete Math, Data Structures, Assembly Language, Object-Oriented Programming
                        </p>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default AboutPage;