import React, { Component } from 'react';

import Header from "./components/header";
import Footer from "./components/footer";

class Blog extends Component {
  
    render() {
      return (
        <div className="Blog">
          <Header />
          <Footer />
        </div>
      );
    }
  }
  
  export default Blog;