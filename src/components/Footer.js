import React, { Component } from 'react'
import './css/Footer.css'

class Footer extends Component {
    render() {
        return (
            <footer className='site-footer'>
                <div className='footer-option'>555-555-555</div>
                <div className='footer-option'><a href='https://github.com/Bohdan-TheOne/eros' target='blank'><img src='https://github.com/fluidicon.png' alt='github' height='25' /> GitHub page</a></div>
                <div className='footer-option'><a href="/about">About Us</a></div>
            </footer>
        )
    }
}

export default Footer;