import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './css/Header.css'
import Home from './Home'
import Current from './Current'
import Statistic from './Statistic'
import About from './About'

function Header() {
    return (
        <Router>
            <nav>
                <ul className='header-list'>
                    <li className='active-choise'><Link to="/">Home</Link></li>
                    <li><Link to="/current">Current</Link></li>
                    <li><Link to="/statistic">Statistic</Link></li>
                    <li className='float-r'><Link to="/about">About Us</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route exact path='/'><Home /></Route>
                <Route path='/current'><Current /></Route>
                <Route path='/statistic'><Statistic /></Route>
                <Route path='/about'><About /></Route>
            </Switch>
      </Router>
    )
}

export default Header;