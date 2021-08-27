import React, { Component } from 'react'
import './css/beautiful-list.css'


class Sensors extends Component {
    render() {
        // Get Sensors for Device from apollo
        // TEST-DATA
        var list = [
            {
                key: 'abcd-efgh',
                name: 'first',
                type: 'light'
            },
            {
                key: 'ijkl-mnop',
                name: 'second',
                type: 'temperature'
            },
            {
                key: 'qrst-uvwx',
                name: 'third',
                type: 'humidity'
            }
        ]
        const sensors = list.map((elem, index) => {
            return (
                <li key={elem.key} className='li-colored'>
                    <h4>{elem.name}</h4><pre>   - {elem.type}</pre>
                </li>
            )
        })
        return (
            <div>
                <h1>Sensors</h1>
                <div>
                    <ul className='ul-colored'>
                        {sensors}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sensors;