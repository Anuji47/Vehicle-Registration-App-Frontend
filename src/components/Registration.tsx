import React from "react";
import './Registration.module.css';

class Registration extends React.Component {
    onRegisterButtonClick = async () => {
        var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
        xmlhttp.open("POST", "http://localhost:3001/postvehicles");
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.send(
            `{
                "_id": "02",
                "VehicleNo": "223-5678",
                "VehicleModel": "Swift"
            }`
        );
    }
    render() {
        return (

            <form>
                <div className="texts">
                    <input className="texts" id='input-field' type='text' placeholder="Vehicle Number" />
                    <input id="input-field" type='text' placeholder='Vehicle Model' />
                </div>
                <button id="registerbtn" onClick={this.onRegisterButtonClick} className="enter" type="button">
                </button>
            </form>
        )
    }
}

export default Registration;