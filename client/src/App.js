import React, { Component } from "react";
/*import logo from './logo.svg';
import './App.css';*/
const axios = require("axios");

class App extends Component {
  state = { data: {} };

  componentDidMount() {
    axios.get("http://localhost:9000/response").then(res => {
      console.log(res);
      const data = res.data;
      this.setState({ data });
    });
  }

  render() {
    return (
      <div>
        <p>Name: {this.state.data.firstName}</p>
        <p>Last name: {this.state.data.lastName}</p>
      </div>
    );
  }
}

export default App;
