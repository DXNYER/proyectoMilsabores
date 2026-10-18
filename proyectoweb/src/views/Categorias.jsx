import React from 'react';
// Importamos tu arreglo desde la carpeta data
import { productosIniciales } from '../data/productos';
import { useCart } from '../context/CartContext';

export default function Categorias() {
  const { agregarAlCarrito } = useCart();

  return (
    <div className="container-xxl py-5">
      <div className="container">
        {/* Título de la sección estilo plantilla */}
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
          <h1 className="display-6 mb-3 fw-bold">Catálogo de Productos 🍰</h1>
          <p className="text-muted">Explora nuestra gran variedad de especialidades y repostería</p>
          <hr className="w-25 mx-auto bg-primary" />
        </div>
        
        {/* Contenedor en cuadrícula para las tarjetas */}
        <div className="row g-4">
          {productosIniciales.map((producto) => (
            <div className="col-lg-4 col-md-6" key={producto.codigo}>
              <div className="card product-item shadow-sm h-100 border-0 overflow-hidden">
                <div className="position-relative overflow-hidden" style={{ height: '220px' }}>
                  <img 
                    src={producto.imagen} 
                    alt={producto.nombre} 
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                    // Por si falla una URL de internet, evita que rompa la UI
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/250'; }}
                  />
                </div>
                <div className="card-body d-flex flex-column p-4">
                  <span className="text-uppercase text-muted small fw-bold mb-2">
                    {producto.categoria} ({producto.tamano}) - <span className="text-secondary">{producto.codigo}</span>
                  </span>
                  <h5 className="card-title fw-bold mb-2">{producto.nombre}</h5>
                  <p className="card-text text-muted small mb-4 flex-grow-1">{producto.descripcion}</p>
                  
                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="fw-bold fs-5 text-primary">
                        ${producto.precio.toLocaleString('es-CL')}
                      </span>
                    </div>
                    <button 
                      className="btn btn-warning w-100 fw-bold py-2 shadow-sm text-dark"
                      onClick={() => agregarAlCarrito(producto)}
                    >
                      Añadir al Carrito 🛒
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}