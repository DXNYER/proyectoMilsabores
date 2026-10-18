import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Lista de usuarios registrados (simulada en memoria o con localStorage)
  const [usuarios, setUsuarios] = useState([
    // Usuario por defecto para probar
    { nombre: 'Administrador', email: 'admin@duoc.cl', password: '123456' }
  ]);

  // Usuario que ha iniciado sesión actualmente
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);

  // Función para registrar un nuevo usuario
  const registrarUsuario = (nuevoUsuario) => {
    // Verificamos si el correo ya existe
    const existe = usuarios.some((u) => u.email === nuevoUsuario.email);
    if (existe) {
      return { success: false, message: 'Este correo ya está registrado.' };
    }

    setUsuarios([...usuarios, nuevoUsuario]);
    return { success: true, message: '¡Registro exitoso!' };
  };

  // Función para iniciar sesión
  const loginUsuario = (email, password) => {
    const usuarioEncontrado = usuarios.find(
      (u) => u.email === email && u.password === password
    );

    if (usuarioEncontrado) {
      setUsuarioLogueado(usuarioEncontrado);
      return { success: true, message: `¡Bienvenido de nuevo, ${usuarioEncontrado.nombre}!` };
    } else {
      return { success: false, message: 'Correo o contraseña incorrectos.' };
    }
  };

  // Función para cerrar sesión
  const logoutUsuario = () => {
    setUsuarioLogueado(null);
  };

  return (
    <AuthContext.Provider
      value={{
        usuarios,
        usuarioLogueado,
        registrarUsuario,
        loginUsuario,
        logoutUsuario,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);