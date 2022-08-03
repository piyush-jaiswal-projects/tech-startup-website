import React, { Component } from 'react';
import './styles/App.css';
import Header from "./components/header";
import Landing from "./components/landing";
import Services from "./components/services";
import Expert from "./components/expert";
import Stats from "./components/stats";
import Contacts from "./components/contacts";
import Gallery from "./components/gallery";
import Events from "./components/events";
import Footer from "./components/footer";
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
        <Stats />
        <Events />
        {/* <Gallery />
        <Contacts />
        <Footer /> */}
      </div>
    );
  }
}

export default App;