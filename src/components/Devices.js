import React, { Component } from 'react'
import './css/beautiful-list.css'


class Devices extends Component {
    render() {
        // Get Devices from apollo
        // TEST-DATA
        var list = [
            {
                key: 'abcd-efgh',
                name: 'first',
                model: 'zcx-3090-ti'
            },
            {
                key: 'ijkl-mnop',
                name: 'second',
                model: 'zcx-2060s'
            },
            {
                key: 'qrst-uvwx',
                name: 'third',
                model: 'zcx-1650'
            }
        ]
        const devs = list.map((elem, index) => {
            return (
                <li key={elem.key} className='li-colored'>
                    <h4>{elem.name}</h4><pre>   - {elem.model}</pre>
                </li>
            )
        })
        return (
            <div>
                <h1>Devices</h1>
                <div>
                    <ul className='ul-colored'>
                        {devs}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Devices;