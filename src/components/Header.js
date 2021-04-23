import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './css/Header.css'
import Home from './Home'
import Current from './Current'
import Statistic from './Statistic'
import About from './About'

function Header() {
    return (
        <div>
            <Router>
                <nav>
                    <ul className='header-list'>
                        <li onClick={ changeActive } className='active-choise'><Link to="/">Home</Link></li>
                        <li onClick={ changeActive }><Link to="/current">Current</Link></li>
                        <li onClick={ changeActive }><Link to="/statistic">Statistic</Link></li>
                        <li onClick={ changeActive } className='float-r'><Link to="/about">About Us</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path='/'><Home /></Route>
                    <Route path='/current'><Current /></Route>
                    <Route path='/statistic'><Statistic /></Route>
                    <Route path='/about'><About /></Route>
                </Switch>
            </Router>
        </div>
    )
}

function changeActive(e) {
    document.getElementsByClassName('active-choise')[0].classList.remove('active-choise')
    e.target.classList.add('active-choise')
}

export default Header;