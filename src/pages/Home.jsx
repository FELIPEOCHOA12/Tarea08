import React from "react";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">¡Bienvenido!</h1>
        
        {user ? (
          <p className="text-lg text-gray-700">
            Hola <strong>{user.username}</strong>, estás logueado como{" "}
            <span className="capitalize font-medium">{user.role}</span>.
          </p>
        ) : (
          <p className="text-lg text-gray-700">
            Por favor <span className="text-blue-500">inicia sesión</span> o <span className="text-blue-500">regístrate</span> para continuar.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
