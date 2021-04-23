import React from 'react'
import './css/Header.css'

function Header() {
    return (
        <nav>
            <ul className='header-list'>
                <li className='active-choise'><a href="/">Home</a></li>
                <li><a href="/current">Current</a></li>
                <li><a href="/statistic">Statistic</a></li>
                <li className='float-r'><a href="/about">About Us</a></li>
            </ul>
        </nav>
    )
}

export default Header;