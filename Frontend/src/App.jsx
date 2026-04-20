import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { Navar } from './layouts/Navar';
import { Footer } from './layouts/Footer';
import { Productos } from './pages/AgregaProducto/Productos';
import { CreateUser } from './pages/User/CreateUser';
import { LoginUser } from './pages/User/LoginUser';

import './App.css'

function App() {
  //Verifica que el usuario este logeado
  function PrivateRute({ children }) {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/loginUser" />;
  }

  //Solo los usuarios admin pueden editar productos
  function PrivateRuteAdmin({ children }) {
    const token = localStorage.getItem("token");
    const payload = token ? JSON.parse(atob(token.split(".")[1])) : false;
    return payload.rol ? children : <Navigate to="/home" />;
  }

  return (
    <BrowserRouter>
      <Navar />

      <Routes>
        <Route path='/home' element={<PrivateRute><Home /></PrivateRute>} />
        <Route path='/productos' element={<PrivateRute><PrivateRuteAdmin><Productos /></PrivateRuteAdmin></PrivateRute>} />
        <Route path='/registerUser' element={<CreateUser />} />
        <Route path='/loginUser' element={<LoginUser />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
