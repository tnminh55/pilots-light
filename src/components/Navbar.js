import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    const [clicked, setclicked] = useState(false);
    const handleclick = () => {
        setclicked(!clicked);
    };
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo">
                        Pilot Light <i className="fas fa-bible" />
                    </Link>
                    <div className="menu-icon" onclick={handleclick}>
                        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className="menu-list">

                        <li className="menu-item">
                            <Link to='/' className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to='/History' className="nav-link">
                                History
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to='/Testimonials' className="nav-link">
                                Testimonials
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to='/Leaflets' className="nav-link">
                                Leaflets
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to='/Sign Up' className="nav-link">
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
