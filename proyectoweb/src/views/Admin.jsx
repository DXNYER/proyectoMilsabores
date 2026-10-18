import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Admin() {
  const { productos, agregarProductoAdmin, eliminarProductoAdmin } = useCart();

  const [form, setForm] = useState({
    nombre: '',
    precio: '',
    categoria: 'Postres',
    descripcion: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.precio) {
      alert('Por favor completa el nombre y precio del producto');
      return;
    }
    agregarProductoAdmin(form);
    setForm({ nombre: '', precio: '', categoria: 'Postres', descripcion: '' });
    alert('¡Producto agregado correctamente!');
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Panel de Administración - Mil Sabores 🛠️</h2>

      <div className="row">
        {/* Formulario para agregar producto */}
        <div className="col-md-5 mb-4">
          <div className="card p-4 shadow-sm">
            <h4>Agregar Nuevo Producto</h4>
            <form onSubmit={handleSubmit} className="mt-3">
              <div className="mb-3">
                <label className="form-label">Nombre del Producto</label>
                <input
                  type="text"
                  className="form-control"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  placeholder="Ej: Torta Amor"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Precio ($)</label>
                <input
                  type="number"
                  className="form-control"
                  value={form.precio}
                  onChange={(e) => setForm({ ...form, precio: e.target.value })}
                  placeholder="Ej: 15000"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Categoría</label>
                <select
                  className="form-select"
                  value={form.categoria}
                  onChange={(e) => setForm({ ...form, categoria: e.target.value })}
                >
                  <option value="Tortas">Tortas</option>
                  <option value="Postres">Postres</option>
                  <option value="Galletas">Galletas</option>
                  <option value="Bebidas">Bebidas</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Descripción</label>
                <textarea
                  className="form-control"
                  rows="2"
                  value={form.descripcion}
                  onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Guardar Producto
              </button>
            </form>
          </div>
        </div>

        {/* Lista de productos actuales */}
        <div className="col-md-7">
          <div className="card p-4 shadow-sm">
            <h4>Inventario Actual ({productos.length} productos)</h4>
            <div className="table-responsive mt-3">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Categoría</th>
                    <th>Precio</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {productos.map((prod) => (
                    <tr key={prod.id}>
                      <td>{prod.nombre}</td>
                      <td>{prod.categoria || 'General'}</td>
                      <td>${Number(prod.precio).toLocaleString()}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => eliminarProductoAdmin(prod.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}