import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { Navar } from './layouts/Navar';
import { Footer } from './layouts/Footer';
import { Productos } from './pages/AgregaProducto/Productos';

import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Navar />

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/productos' element={<Productos />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
