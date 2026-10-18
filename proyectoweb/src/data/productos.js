
export let productosIniciales = [
  {
    id: 1,
    codigo: 'TC001',
    categoria: 'tortas-cuadradas',
    tamano: 'mediano',
    nombre: 'Torta Cuadrada de Chocolate',
    precio: 45000,
    imagen: '/img/product_1.avif',
    descripcion: 'Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales.'
  },
  {
    id: 2,
    codigo: 'TC002',
    categoria: 'tortas-cuadradas',
    tamano: 'grande',
    nombre: 'Torta Cuadrada de Frutas',
    precio: 50000,
    imagen: '/img/product_2.jfif',
    descripcion: 'Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones.'
  },
  {
    id: 3,
    codigo: 'TT001',
    categoria: 'tortas-circulares',
    tamano: 'mediano',
    nombre: 'Torta Circular de Vainilla',
    precio: 40000,
    imagen: '/img/product_3.webp',
    descripcion: 'Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión.'
  },
  {
    id: 4,
    codigo: 'TT002',
    categoria: 'tortas-circulares',
    tamano: 'grande',
    nombre: 'Torta Circular de Manjar',
    precio: 42000,
    imagen: '/img/product_4.jpg',
    descripcion: 'Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos.'
  },
  {
    id: 5,
    codigo: 'PI001',
    categoria: 'postres-individuales',
    tamano: 'individual',
    nombre: 'Mousse de Chocolate',
    precio: 5000,
    imagen: '/img/product_5.jpg',
    descripcion: 'Postre individual cremoso y suave, hecho con chocolate de alta calidad, ideal para los amantes del chocolate.'
  },
  {
    id: 6,
    codigo: 'PI002',
    categoria: 'postres-individuales',
    tamano: 'individual',
    nombre: 'Tiramisú Clásico',
    precio: 5500,
    imagen: '/img/product_6.jpg',
    descripcion: 'Un postre italiano individual con capas de café, mascarpone y cacao, perfecto para finalizar cualquier comida.'
  },
  {
    id: 7,
    codigo: 'PSA001',
    categoria: 'sin-azucar',
    tamano: 'mediano',
    nombre: 'Torta Sin Azúcar de Naranja',
    precio: 48000,
    imagen: '/img/product_7.jpg',
    descripcion: 'Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones más saludables.'
  },
  {
    id: 8,
    codigo: 'PSA002',
    categoria: 'sin-azucar',
    tamano: 'grande',
    nombre: 'Cheesecake Sin Azúcar',
    precio: 47000,
    imagen: '/img/product_8.jpg',
    descripcion: 'Suave y cremoso, este cheesecake es una opción perfecta para disfrutar sin culpa.'
  },
  {
    id: 9,
    codigo: 'PT001',
    categoria: 'tradicional',
    tamano: 'individual',
    nombre: 'Empanada de Manzana',
    precio: 3000,
    imagen: '/img/product_9.jpg',
    descripcion: 'Pastelería tradicional rellena de manzanas especiadas, perfecta para un dulce desayuno o merienda.'
  },
  {
    id: 10,
    codigo: 'PT002',
    categoria: 'tradicional',
    tamano: 'individual',
    nombre: 'Tarta de Santiago',
    precio: 6000,
    imagen: '/img/product_10.jpg',
    descripcion: 'Tradicional tarta española hecha con almendras, azúcar y huevos, una delicia para los amantes de los postres clásicos.'
  },
  {
    id: 11,
    codigo: 'PG001',
    categoria: 'sin-gluten',
    tamano: 'individual',
    nombre: 'Brownie Sin Gluten',
    precio: 4000,
    imagen: '/img/product_11.jpg',
    descripcion: 'Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten sin sacrificar el sabor.'
  },
  {
    id: 12,
    codigo: 'PG002',
    categoria: 'sin-gluten',
    tamano: 'chico',
    nombre: 'Pan Sin Gluten',
    precio: 3500,
    imagen: '/img/product_12.jpg',
    descripcion: 'Suave y esponjoso, ideal para sándwiches o para acompañar cualquier comida.'
  },
  {
    id: 13,
    codigo: 'PV001',
    categoria: 'vegana',
    tamano: 'mediano',
    nombre: 'Torta Vegana de Chocolate',
    precio: 50000,
    imagen: '/img/product_13.jfif',
    descripcion: 'Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal, perfecta para veganos.'
  },
  {
    id: 14,
    codigo: 'PV002',
    categoria: 'vegana',
    tamano: 'chico',
    nombre: 'Galletas Veganas de Avena',
    precio: 4500,
    imagen: '/img/product_14.webp',
    descripcion: 'Crujientes y sabrosas, estas galletas son una excelente opción para un snack saludable y vegano.'
  },
  {
    id: 15,
    codigo: 'TE001',
    categoria: 'especiales',
    tamano: 'grande',
    nombre: 'Torta Especial de Cumpleaños',
    precio: 55000,
    imagen: '/img/product_15.jpg',
    descripcion: 'Diseñada especialmente para celebraciones, personalizable con decoraciones y mensajes únicos.'
  },
  {
    id: 16,
    codigo: 'TE002',
    categoria: 'especiales',
    tamano: 'grande',
    nombre: 'Torta Especial de Boda',
    precio: 60000,
    imagen: '/img/product_16.webp',
    descripcion: 'Elegante y deliciosa, esta torta está diseñada para ser el centro de atención en cualquier boda.'
  }
];

// Exportación por defecto
export default productosIniciales;

// Funciones CRUD simuladas
export const obtenerProductos = () => {
  return productosIniciales;
};

export const agregarProducto = (nuevoProducto) => {
  const id = productosIniciales.length > 0 ? productosIniciales[productosIniciales.length - 1].id + 1 : 1;
  const productoConId = { id, ...nuevoProducto };
  productosIniciales.push(productoConId);
  return productosIniciales;
};

export const actualizarProducto = (id, datosActualizados) => {
  productosIniciales = productosIniciales.map(prod => 
    prod.id === id ? { ...prod, ...datosActualizados } : prod
  );
  return productosIniciales;
};

export const eliminarProducto = (id) => {
  productosIniciales = productosIniciales.filter(prod => prod.id !== id);
  return productosIniciales;
};