import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { cantidadTotalCarrito } = useCart();
  const { usuarioLogueado, logoutUsuario } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand font-weight-bold" to="/">
          🍰 Mil Sabores
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categorias">
                Categorías
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin 🛠️
              </Link>
            </li>

            {usuarioLogueado ? (
              <>
                <li className="nav-item text-light mx-2">
                  Hola, <b>{usuarioLogueado.nombre}</b>
                </li>
                <li className="nav-item">
                  <button 
                    className="btn btn-outline-light btn-sm ms-2"
                    onClick={logoutUsuario}
                  >
                    Cerrar Sesión
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Ingresar
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/registro">
                    Registrarse
                  </Link>
                </li>
              </>
            )}

            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <Link className="btn btn-warning text-dark fw-bold" to="/carrito">
                🛒 Carrito ({cantidadTotalCarrito})
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}