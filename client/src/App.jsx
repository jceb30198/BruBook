import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import Brewd from './pages/Brewd';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='brewd' element={<Brewd />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;