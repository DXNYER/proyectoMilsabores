import React from 'react';
import { useCart } from '../context/CartContext';

export default function Home() {
  const { productos, agregarAlCarrito } = useCart();

  return (
    <div className="container-xxl py-5">
      {/* 1. Sección Hero / Banner Principal con Imagen de Fondo */}
      <div 
        className="p-5 mb-5 rounded-3 shadow-sm text-white position-relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/img/carousel-1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '380px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="container py-4 position-relative" style={{ zIndex: 1 }}>
          <div className="row justify-content-start align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 
                className="display-3 fw-bold text-white mb-3" 
                style={{ fontFamily: 'Pacifico, cursive', textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
              >
                Pastelería Mil Sabores 🎂
              </h1>
              <p className="fs-4 text-light mb-4" style={{ textShadow: '1px 1px 5px rgba(0,0,0,0.7)' }}>
                50 años entregando tradición, calidad y los mejores momentos dulces para toda la familia chilena.
              </p>
              <div className="d-inline-flex">
                <a href="#catalogo" className="btn btn-warning btn-lg rounded-pill py-3 px-5 fw-bold text-dark shadow">
                  Ver Catálogo 🛒
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Opción Alternativa: Si prefieres el color crema corporativo (#FFF5E1) en lugar de foto, cambia el style por:
          style={{ backgroundColor: '#FFF5E1', color: '#5D4037' }}
      */}

      {/* 2. Sección de Características / Beneficios */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="d-flex align-items-center p-4 rounded shadow-sm h-100 bg-white border">
                <div className="fs-1 text-warning me-3">🌾</div>
                <div>
                  <h5 className="mb-1 fw-bold">Ingredientes Frescos</h5>
                  <p className="mb-0 text-muted small">Seleccionados cuidadosamente cada día para garantizar la máxima calidad.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="d-flex align-items-center p-4 rounded shadow-sm h-100 bg-white border">
                <div className="fs-1 text-warning me-3">👨‍🍳</div>
                <div>
                  <h5 className="mb-1 fw-bold">Tradición Artesanal</h5>
                  <p className="mb-0 text-muted small">Recetas heredadas y perfeccionadas por generaciones de pasteleros.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="d-flex align-items-center p-4 rounded shadow-sm h-100 bg-white border">
                <div className="fs-1 text-warning me-3">🚚</div>
                <div>
                  <h5 className="mb-1 fw-bold">Entrega a Domicilio</h5>
                  <p className="mb-0 text-muted small">Llevamos tu torta en perfectas condiciones directo a tu celebración.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Sección de Catálogo / Grilla de Productos */}
      <div className="container-xxl py-5" id="catalogo">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
            <h6 className="text-warning text-uppercase mb-2 fw-bold">Nuestra Carta</h6>
            <h1 className="display-6 mb-4 fw-bold">Explora las delicias de Mil Sabores</h1>
          </div>

          <div className="row g-4">
            {productos.map((prod) => (
              <div className="col-lg-4 col-md-6" key={prod.id}>
                <div className="card product-item rounded shadow-sm h-100 overflow-hidden border-0">
                  <div className="position-relative overflow-hidden" style={{ height: '240px' }}>
                    <img 
                      className="w-100 h-100" 
                      style={{ objectFit: 'cover' }} 
                      src={prod.imagen} 
                      alt={prod.nombre} 
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400?text=Mil+Sabores';
                      }}
                    />
                  </div>
                  <div className="text-center p-4 d-flex flex-column flex-grow-1">
                    <h5 className="mb-3 fw-bold">{prod.nombre}</h5>
                    <span className="text-success fw-bold fs-5 mb-3">${Number(prod.precio).toLocaleString('es-CL')}</span>
                    <p className="text-muted small mb-4 flex-grow-1">{prod.descripcion}</p>
                    <div className="mt-auto">
                      <button 
                        className="btn btn-warning rounded-pill py-2 px-4 w-100 fw-bold text-dark shadow-sm"
                        onClick={() => agregarAlCarrito(prod)}
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
    </div>
  );
}


