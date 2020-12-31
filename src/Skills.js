import React, { useEffect } from 'react';
import './Skills.css';
import Aos from "aos";
import "aos/dist/aos.css";

// Ask brother for hooks help
function Skills(props) {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return (
        <div 
            className="Skill" 
            data-aos="fade"
        >
            <h2>{props.skill}</h2>
        </div>      
    )
}

export default Skills;