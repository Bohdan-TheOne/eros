import React, { Component } from 'react'
import './css/beautiful-list.css'
import { API_Request } from "../API"


class Devices extends Component {
    constructor(props) {
        super(props);

        this.state = {
            deviceList: {}
        }
    }

    refreshDevicesList() {
        API_Request("devices").fetchAll()
            .then(res => {
                this.setState({
                    deviceList: res.data
                });
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.refreshDevicesList();
    }

    render() {
        const devs = Object.keys(this.state.deviceList).map((key, index) => {
            return (
                <li key={key} className='li-colored'>
                    <a href={`/devices/${key}/sensors`}>
                        <h4>{this.state.deviceList[key].name}</h4><h3><pre>   -   </pre>{this.state.deviceList[key].model}</h3>
                    </a>
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