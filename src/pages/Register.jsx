import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "user",
  });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.password || !form.role) {
      setError("Todos los campos son obligatorios");
      return;
    }

    register(form.username, form.password, form.role);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Crear Cuenta
        </h2>

        {error && (
          <div className="bg-red-100 text-red-600 px-4 py-2 rounded mb-4">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700">Usuario</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Ingresa un nombre de usuario"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Contraseña</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Crea una contraseña"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Rol</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="user">Usuario</option>
            <option value="moderator">Moderador</option>
            <option value="admin">Administrador</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white font-semibold py-2 rounded hover:bg-green-600 transition"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default Register;
