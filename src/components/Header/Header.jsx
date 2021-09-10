import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="navbar">
            <div className="navbar-logo-div">
                <Link to="/">
                    <img className="logo" src="./logo.png" alt="logo" width="60"/>
                </Link>
            </div>
            <div className="navbar-list-div">
                <ul className="navbar-list">
                    <li className="navbar-list-item">
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className="navbar-list-item">
                        <Link to="#">About</Link>
                    </li>
                    <li className="navbar-list-item">
                        <Link to="#">Contact</Link>
                    </li>
                    <button type="button" className="navbar-btn">Sign In</button>
                </ul>
            </div>
        </nav>
    )
}
