import React, { createContext, useState, useContext } from 'react';
import { productosIniciales } from '../data/productos';// Tu archivo de productos existente

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Estado de productos (para que el Admin pueda agregar/eliminar/editar)
  const [productos, setProductos] = useState(productosIniciales || []);

  // Estado del Carrito
  const [cart, setCart] = useState([]);

  // Estado de Cupones / Descuentos
  const [cupon, setCupon] = useState('');
  const [descuento, setDescuento] = useState(0); // Porcentaje (ej: 0.10 para 10%)
  const [mensajeCupon, setMensajeCupon] = useState('');

  // Cupones válidos
  const cuponesValidos = {
    'MILSABORES10': 0.10, // 10% de descuento
    'PROFE100': 0.20,     // 20% de descuento
    'DUOC2026': 0.15      // 15% de descuento
  };

  // 🛒 Funciones del Carrito
  const agregarAlCarrito = (producto) => {
    setCart((prevCart) => {
      const existe = prevCart.find((item) => item.id === producto.id);
      if (existe) {
        return prevCart.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prevCart, { ...producto, cantidad: 1 }];
    });
  };

  const eliminarDelCarrito = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const cambiarCantidad = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const nuevaCantidad = item.cantidad + delta;
            return nuevaCantidad > 0 ? { ...item, cantidad: nuevaCantidad } : item;
          }
          return item;
        })
        .filter((item) => item.cantidad > 0)
    );
  };

  const vaciarCarrito = () => {
    setCart([]);
    setDescuento(0);
    setCupon('');
    setMensajeCupon('');
  };

  // 🎟️ Función para Aplicar Cupón
  const aplicarCupon = (codigo) => {
    const codigoUpper = codigo.trim().toUpperCase();
    if (cuponesValidos[codigoUpper]) {
      setDescuento(cuponesValidos[codigoUpper]);
      setCupon(codigoUpper);
      setMensajeCupon(`¡Cupón ${codigoUpper} aplicado con exito! (${cuponesValidos[codigoUpper] * 100}% desc)`);
    } else {
      setMensajeCupon('Código de cupón inválido');
    }
  };

  // 🛠️ Funciones del Panel de Administración (CRUD de Productos)
  const agregarProductoAdmin = (nuevoProducto) => {
    const nuevo = {
      ...nuevoProducto,
      id: Date.now(),
      precio: Number(nuevoProducto.precio)
    };
    setProductos([...productos, nuevo]);
  };

  const eliminarProductoAdmin = (id) => {
    setProductos(productos.filter((prod) => prod.id !== id));
  };

  // Totales
  const subtotal = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const totalDescuento = subtotal * descuento;
  const total = subtotal - totalDescuento;
  const cantidadTotalCarrito = cart.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <CartContext.Provider
      value={{
        productos,
        cart,
        cupon,
        descuento,
        mensajeCupon,
        subtotal,
        total,
        totalDescuento,
        cantidadTotalCarrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        cambiarCantidad,
        vaciarCarrito,
        aplicarCupon,
        agregarProductoAdmin,
        eliminarProductoAdmin,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);