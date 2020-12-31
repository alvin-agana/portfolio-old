import React, { Component } from 'react';
import { Link } from "react-scroll";
import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked});
    }

    render() {
        const MenuItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];
        return(
            <nav className="Navbar">
                <h1 className="navbar-logo">ALVIN • AGANA</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'navbar-menu active' : 'navbar-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link
                                    className="navbar-item"
                                    activeClass="active"
                                    to={item}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}>
                                    <span>{item}</span>
                                </Link>
                            </li>
                            )
                    })}
                </ul>
            </nav>
        ) 
    }
}


export default Navbar;