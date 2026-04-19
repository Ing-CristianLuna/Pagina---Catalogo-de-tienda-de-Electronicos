import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { Navar } from './layouts/Navar';
import { Footer } from './layouts/Footer';

import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Navar />

      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
