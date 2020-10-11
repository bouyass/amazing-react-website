import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the adventure newsletter to recieve our best 
                    vacations deals.
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="inputareas">
                    <form>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Your Email"
                            className="footer-input"/>
                        <button buttonStyle='btn--outline'>Subscribe</button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-links-wrapper">
                    <div className="footer-links-items">
                        <h2> About Us</h2>
                        <Link to="/sign-up"> How it works ?</Link>
                        <Link to="/sign-up"> Testimonials</Link>
                        <Link to="/sign-up"> Careers</Link>
                        <Link to="/sign-up"> Investor</Link>
                        <Link to="/sign-up"> Terms of services</Link>
                    </div>
                    <div className="footer-links-items">
                        <h2> About Us</h2>
                        <Link to="/sign-up"> How it works ?</Link>
                        <Link to="/sign-up"> Testimonials</Link>
                        <Link to="/sign-up"> Careers</Link>
                        <Link to="/sign-up"> Investor</Link>
                        <Link to="/sign-up"> Terms of services</Link>
                    </div>
                </div>
                <div className="footer-links-wrapper">
                    <div className="footer-links-items">
                        <h2> About Us</h2>
                        <Link to="/sign-up"> How it works ?</Link>
                        <Link to="/sign-up"> Testimonials</Link>
                        <Link to="/sign-up"> Careers</Link>
                        <Link to="/sign-up"> Investor</Link>
                        <Link to="/sign-up"> Terms of services</Link>
                    </div>
                    <div className="footer-links-items">
                        <h2> About Us</h2>
                        <Link to="/sign-up"> How it works ?</Link>
                        <Link to="/sign-up"> Testimonials</Link>
                        <Link to="/sign-up"> Careers</Link>
                        <Link to="/sign-up"> Investor</Link>
                        <Link to="/sign-up"> Terms of services</Link>
                    </div>
                </div>
                
               
            </div>
            <section className="social-media">
                <div className="sociam-media-wrap">
                    <div className="social-logo">
                        <Link to="/" className="social-logo">
                            LYES <i className="fab fa-typo3"/>
                        </Link>
                    </div>
                    <small className="website-rights"> LYES c 2020</small>
                    <div className="social-icons">
                        <Link to="/" target="_blank" aria-label="Facebook" className="social-icon-link facebook">
                        <i className="fab fa-facebook-f"/>
                        </Link>
                        <Link to="/" target="_blank" aria-label="Instagram" className="social-icon-link instagram">
                        <i className="fab fa-instagram"/>
                        </Link>
                        <Link to="/" target="_blank" aria-label="LinkedIn" className="social-icon-link linkedin">
                        <i className="fab fa-linkedin "/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
