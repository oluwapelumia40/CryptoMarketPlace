import './App.css';
import React from 'react';
import Home from './Home';
import Contact from './Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
