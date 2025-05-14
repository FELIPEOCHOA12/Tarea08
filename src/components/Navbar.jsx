import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Tarea07 App</Link>
      </div>
      <ul className="navbar-menu">
        {user ? (
          <>
            <li className="user-info">Hola, <strong>{user.username}</strong> ({user.role})</li>
            {user.role === "admin" && <li><Link to="/admin">Panel Admin</Link></li>}
            {user.role === "moderator" && <li><Link to="/moderator">Panel Moderador</Link></li>}
            <li><button onClick={handleLogout} className="btn-logout">Cerrar sesión</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Iniciar Sesión</Link></li>
            <li><Link to="/register">Registrarse</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
