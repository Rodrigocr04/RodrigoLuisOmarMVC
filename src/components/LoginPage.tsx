import type React from "react"
import { useState } from "react"
import { InputField } from "./InputField"
import { RegistrationModal } from "./Registration"
import "./LoginPage.css"

interface LoginPageProps {
  onLogin: () => void
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [showRegisterModal, setShowRegisterModal] = useState(false)

  const openRegisterModal = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowRegisterModal(true)
  }

  const closeRegisterModal = () => {
    setShowRegisterModal(false)
  }

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
          <InputField type="text" label="Usuario" placeholder="Ingrese su nombre de usuario o correo" />
          <InputField type="password" label="Contraseña" placeholder="Ingrese su contraseña" />
        </div>

        <div className="login-footer">
          <button className="login-button" onClick={onLogin}>
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
  )
}

export default LoginPage