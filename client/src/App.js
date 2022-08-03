import React, { Component } from 'react';
import './styles/App.css';
import Header from "./components/header";
import Landing from "./components/landing";
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
      </div>
    );
  }
}

export default App;