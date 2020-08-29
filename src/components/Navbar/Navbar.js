import React, { Component } from 'react';
import './index.css'

class Navbar extends Component {
    render() {
        return (
            <ul className="nav justify-content-start">
                <li className="nav-item">
                    <a className="nav-link active" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/products">Products</a>
                </li>
            </ul>
        );
    }
}

export default Navbar;