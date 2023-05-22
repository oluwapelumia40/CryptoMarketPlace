import './App.css';
import React from 'react';
import Home from './Home';
import Explore from './Explore';
import Contact from './Contact';
import Support from './Support';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Success from './Success';
const helmetContext = {};

function App() {  
  return (
    <div className="App">
      <HelmetProvider context={helmetContext}>
        <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<Home/>}/>
              <Route path="/contact" exact element={<Contact/>}/>
              <Route path="/explore" exact element={<Explore/>}/>
              <Route path="/support" exact element={<Support/>}/>
              <Route path="/success" exact element={<Success/>}/>
            </Routes>
          </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;
