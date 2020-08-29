import React, { Component } from 'react';
import './index.css'
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <ul className="nav justify-content-start">
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/"
                        exact
                        activeStyle={{
                            backgroundColor: "#e74c3c",
                            color: "#fff"
                        }}
                    >Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/products-list"
                        activeStyle={{
                            backgroundColor: "#e74c3c",
                            color: "#fff"
                        }}
                    >Products</NavLink>
                </li>
            </ul>
        );
    }
}

export default Navbar;