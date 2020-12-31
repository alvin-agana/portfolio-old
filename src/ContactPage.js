import React, { Component } from 'react';
import './ContactPage.css'
import Icon from './icon';

// Add github icon
class ContactPage extends Component {
    render() {
        return (
            <div className="ContactPage" id="Contact">
                <h1>Let's connect.</h1>
                <h2>
                    Feel free to reach me at my emails:<br/>
                    alvin.agana@gmail.com<br/>
                    alvagana@ucdavis.edu
                </h2>
                <div className="icon-box-container">
                        <Icon iconName="linkedin" iconNum={0}/>
                        <Icon iconName="instagram" iconNum={1}/>
                        <Icon iconName="facebook" iconNum={2}/>
                        <Icon iconName="github" iconNum={3}/>
                </div>
                <p>This website was designed by Alvin Agana and built using React.js.</p>
            </div>
        )
    }
}

export default ContactPage;