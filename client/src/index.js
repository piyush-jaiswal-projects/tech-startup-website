import React from 'react';
// import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const rootElement = document.getElementById("root");

render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
          <App />
          </div>
        } />
        {/* <Route path="/contact-form" element={<ContactForm />} /> */}
        
      </Routes>
    </BrowserRouter>,
    rootElement
  );

