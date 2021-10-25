import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="container">
            <div className="footer-container">
                <div className='footer-items'>
                    <h2>Contact Us</h2>
                    <p>How it Works</p>
                    <p>Testimonials</p>
                    <p>Meeting</p>
                    <p>Signed Up</p>
                    <p>Term of Service</p>
                </div>
                <div className='footer-items'>
                    <h2>About Us</h2>
                    <p>How it Works</p>
                    <p>Bible studies</p>
                    <p>Service</p>
                    <p>Blog</p>
                    <p>Term of Service</p>
                </div>
                <div className='footer-items'>
                    <h2>About Us</h2>
                    <p>How it Works</p>
                    <p>Witnessing</p>
                    <p>Online Church</p>
                    <p>Life Groups</p>
                    <p>Term of Service</p>
                </div>

                <small className='small-logo'>Pilot Light<i className="fas fa-bible" /></small>
            </div>

        </div>
    )
}

export default Footer