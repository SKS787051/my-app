import React, { Component } from "react";
import "./App.css";
import Registers from "./Components/Registers";
import Greets from "./Components/Greets";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRegistered: false,
      name: null,
      email: null,
      password: null,
      showPasword : false,
    };
  }

  registrationHandler = (event) => {
   const name = event.target.name.value;
   const email = event.target.email.value;
   const password = event.target.password.value;
   this.setState({name,email,password,isRegistered:true});
    event.preventDefault();

  };

  showpassordHandler = () =>{
    console.log(this.state);
    this.setState({showPasword: ! this.state.showPasword},()=>{
      console.log(this.state);
    });
    
  }

  render() {
    return (
      <div>
        {this.state.isRegistered ? (
          <Greets name = {this.state.name} email={this.state.email} />
        ) : (
          <Registers submit={this.registrationHandler} showPasword= {this.state.showPasword} click = {this.showpassordHandler}  />
        )}
      </div>
    );
  }
}

export default App;
