import React, { Component } from 'react';
import './styles/App.css';
import Header from "./components/header";
import Landing from "./components/landing";
import Services from "./components/services";
import Expert from "./components/expert";
// import axios from 'axios'

class App extends Component {
  // componentDidMount() {
  //   axios.get('/say-something').then((res) => {
  //     const response = res.data;
  //     this.setState({response});
  //   });
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
        <Services />
        <Expert />
      </div>
    );
  }
}

export default App;