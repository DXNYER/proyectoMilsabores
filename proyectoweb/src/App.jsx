import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Categorias from './views/Categorias';
import Carrito from './views/Carrito';
import Admin from './views/Admin';
import Login from './views/Login';
import Registro from './views/Registro';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </>
  );
}

export default App;