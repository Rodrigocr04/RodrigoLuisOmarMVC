import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { InputField } from "../components/InputField"
import { RegistrationModal } from "./Registration"
import { authenticateUser } from "../controladores/AuthControler"
import "../components/LoginPage.css"

const LoginPage: React.FC = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const openRegisterModal = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowRegisterModal(true)
  }

  const closeRegisterModal = () => {
    setShowRegisterModal(false)
  }

  const handleLogin = async (e: React.MouseEvent) => {
    e.preventDefault()
    setError("")

    try {
      const user = await authenticateUser(username, password)

      if (!user) {
        setError("Usuario o contraseña incorrectos")
        return
      }

      // Redirigir según el tipo de usuario
      navigate(`/home/${user.tipo}`)
    } catch (error) {
      setError("Ocurrió un error al iniciar sesión")
    }
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
          <InputField
            type="text"
            label="Usuario"
            placeholder="Ingrese su nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputField
            type="password"
            label="Contraseña"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
  )
}

export default LoginPage