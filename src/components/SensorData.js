import React, { Component } from 'react'


class SensorData extends Component {
    render() {
        // Get Sensor data from apollo
        // TEST-DATA
        var list = [
            {
                time: '27-Aug-2021',
                value: '43%'
            },
            {
                time: '28-Aug-2021',
                value: '32%'
            },
            {
                time: '29-Aug-2021',
                value: '48%'
            }
        ]
        const data = list.map((elem, index) => {
            return (
                <li className='d-flex'>
                    <h4>{elem.time}</h4><pre>   - {elem.value}</pre>
                </li>
            )
        })
        return (
            <div>
                <h1>Devices</h1>
                <div>
                    <ul className='ul-colored'>
                        {data}
                    </ul>
                </div>
            </div>
        )
    }
}

export default SensorData;