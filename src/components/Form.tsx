import { getValue } from '@testing-library/user-event/dist/utils';
import React, { BaseSyntheticEvent } from 'react';
import { DeterminedVehicleTypeObj } from '../App';

type MyProps = {
    onResposeReceived(data: DeterminedVehicleTypeObj): void
    // className: string
};
type MyState = {
    enteredRegNum: EnteredRegNum
};

type EnteredRegNum = {
    regnum: string
}

class Form extends React.Component<MyProps, MyState> {

    state: MyState = {
        enteredRegNum: {
            regnum: ""
        }
    }

    changeRegNum = (e: BaseSyntheticEvent) => {
        this.setState({ enteredRegNum: { regnum: e.target.value } });
    }

    onsubmitBtnClick = async (e: BaseSyntheticEvent) => {
        fetch(`http://localhost:3001/determineType?regnum=${this.state.enteredRegNum.regnum}`)
            .then(response => response.json())
            .then(data => this.props.onResposeReceived(data));

        // const data = { 'hello': 'hehe' };
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // };

        // fetch(
        //     `http://localhost:3001`,
        //     // "http://localhost:3001/determineType",
        //     options
        // )
        //     .then(response => alert(response))
        //     // .then(response => response.json())
        //     // .then(data => alert("HH"));
        //     // .then(data => this.props.onResposeReceived(data));

    }

    render() {
        return (

            <form>
                <div className="texts">
                    <input className="texts" id='input-field' onChange={this.changeRegNum} type='text' placeholder="Enter Here" />
                </div>
                <button onClick={this.onsubmitBtnClick} id="submitBtn" name="submit" className="enter" type="button"/>
            </form>
        )
    }
}

export default Form;