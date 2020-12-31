import React, { Component } from 'react';
import './icon.css';

class Icon extends Component {
    render() {
        const socials = [
            "https://linkedin.com/in/alvin-agana",
            "https://instagram.com/heeeyalvin",
            "https://facebook.com/agana.alvin",
            "https://github.com/alvin-agana"
        ]
        let iconLink = socials[this.props.iconNum]
        return(
            <div>
                <a href={iconLink} className={`icon fa fa-${this.props.iconName}`} target="_blank" rel="noreferrer"></a>
            </div>
        )
    }
}

export default Icon;