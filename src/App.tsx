import React from 'react';
import { JsonObjectExpression } from 'typescript';
import Form from './components/Form';
import Registration from './components/Registration';


type MyProps = {
  // className: string
};
type MyState = {
  determinedVehicleType: DeterminedVehicleTypeObj
};

export type DeterminedVehicleTypeObj = {
  VehicleType: string
}

class App extends React.Component<MyProps, MyState> {
  state: MyState = {
    determinedVehicleType: {
      VehicleType: ""
    }
  }

  render(){
    return (
    <div className="App">
      <header>
      <h1>Vehicle Registration</h1>
      </header>
        Please enter license plate :
      <Form onResposeReceived={(data: DeterminedVehicleTypeObj) => {this.setState({determinedVehicleType: data})}}/>
      <label>{this.state.determinedVehicleType.VehicleType}</label>
      <header>
      <h1>Register Vehicle</h1>
      </header>
      <Registration/>
      
      
    </div>
    )
  }
}

export default App;
