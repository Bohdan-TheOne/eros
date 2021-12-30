import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './css/Header.css'
import Home from './Home'
import Current from './Current'
import Devices from './Devices'
import About from './About'
import Sensors from './Sensors'
import SensorData from './SensorData'

class Header extends Component {
    render() {
        return (
            <div>
                <Router>
                    <nav>
                        <ul className='header-list'>
                            <li onClick={changeActive} className='active-choise'><Link to="/">Home</Link></li>
                            <li onClick={changeActive}><Link to="/current">Current</Link></li>
                            <li onClick={changeActive}><Link to="/devices">Devices</Link></li>
                            <li onClick={changeActive} className='float-r'><Link to="/about">About Us</Link></li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path='/'><Home /></Route>
                        <Route path='/current'><Current /></Route>
                        <Route path='/devices'><Devices /></Route>
                        <Route path='/about'><About /></Route>
                        /* TEST */
                        <Route path='/sensors'><Sensors /></Route>
                        <Route path='/data'><SensorData /></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

function changeActive(e) {
    document.getElementsByClassName('active-choise')[0].classList.remove('active-choise')
    e.target.classList.add('active-choise')
}

export default Header;