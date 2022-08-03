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
import Chatbot from "./components/chatbot";
// import axios from 'axios'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <Chatbot />
        <Landing />
        <Services />
        <Expert />
        <Stats />
        <Events />
        <Gallery />
        <Contacts />
        <Footer />
      </div>
    );
  }
}

export default App;