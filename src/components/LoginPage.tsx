import React, { useState } from "react";
import { InputField } from "./InputField";
import { RegistrationModal } from "./Registration";
import "./LoginPage.css";
import { db } from "../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const openRegisterModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowRegisterModal(true);
  };

  const closeRegisterModal = () => {
    setShowRegisterModal(false);
  };

  const handleLogin = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      const usersRef = collection(db, "Usuarios");
      const q = query(
        usersRef,
        where("nombre", "==", username),
        where("contraseña", "==", password)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError("Usuario o contraseña incorrectos");
      } else {
        setError("");
        onLogin();
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError("Ocurrió un error al iniciar sesión");
    }
  };

  return (
    <div className="login-container">
      <div className="login-overlay"></div>

      <div className="login-card">
        <div className="login-header">
          <div className="login-icon">
            <img src="./recursos/America.png" alt="Login Icon" className="icon" />
          </div>
          <h1 className="login-title">Biblioteca Club América</h1>
        </div>

        <div className="login-content">
          <InputField
            type="text"
            label="Usuario"
            placeholder="Ingrese su nombre de usuario o correo"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <InputField
            type="password"
            label="Contraseña"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
        </div>

        <div className="login-footer">
          <button className="login-button" onClick={handleLogin}>
            Iniciar Sesión
          </button>
          <p className="register-text">
            ¿No tiene una cuenta?{" "}
            <a href="#" className="register-link" onClick={openRegisterModal}>
              Regístrese
            </a>
          </p>
        </div>
      </div>

      {showRegisterModal && <RegistrationModal onClose={closeRegisterModal} />}
    </div>
  );
};

export default LoginPage;