import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const { loginUsuario } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError('Por favor, ingresa tu correo y contraseña.');
      return;
    }

    const resultado = loginUsuario(email, password);

    if (resultado.success) {
      alert(resultado.message);
      navigate('/');
    } else {
      setError(resultado.message);
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm p-4">
            <h3 className="text-center mb-4 text-dark">Iniciar Sesión 🔐</h3>
            
            {error && <div className="alert alert-danger py-2">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label font-weight-bold">Correo Electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="ejemplo@duoc.cl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label font-weight-bold">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary w-100 mt-2 fw-bold">
                iniciar Sesión
              </button>
            </form>

            <hr className="my-4" />
            <div className="text-center">
              <small className="text-muted">
                ¿No tienes una cuenta? <Link to="/registro">Regístrate aquí</Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}