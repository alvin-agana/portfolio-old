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
                            I am 21 years old, and I am junior college student at UC Davis from Union City, CA actively seeking software engineering opportunities.<br/><br/>
                            Two things I enjoy are helping my community and coding web apps. I am passionate about leading my life with kindness as much as I am about web development. For my spring quarter 2021, I joined the non-profit organization ASUCD Pantry as a full stack developer to help thousands of food insecure students by developing their online ordering system!
                            <br/>
                            <br/>
                            Other things I enjoy are playing the piano, playing chess, and watching the NBA. Thanks for stopping by, and enjoy your stay!
                        </p>
                    </div>
                    <div className="AboutPage-Education">
                        <h1>Education</h1>
                        <p>
                            B.S. in Computer Science - University of California, Davis <br/>
                            Davis, CA - September 2020 to June 2022<br/>
                            <b>GPA: 3.82</b><br/><br/>
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