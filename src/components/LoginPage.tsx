import type React from "react"
import { InputField } from "./InputField"
import "./LoginPage.css"


const LoginPage: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-overlay"></div>

      <div className="login-card">
        <div className="login-header">
        <div className="login-icon">
          <img src="./recursos/America.png" alt="Login Icon" className="icon" />
          </div>
          <h1 className="login-title">Biblioteca de Henry la Bomba Yucateca Martin</h1>
          <p className="login-subtitle">Acceda a su cuenta para continuar</p>
        </div>

        <div className="login-content">
          <InputField type="text" label="Usuario" placeholder="Ingrese su nombre de usuario" />
          <InputField type="password" label="Contraseña" placeholder="Ingrese su contraseña" />

          <div className="login-options">
            <div className="remember-option">
              <input type="checkbox" id="remember" className="remember-checkbox" />
              <label htmlFor="remember" className="remember-label">
                Recordarme
              </label>
            </div>
            <a href="#" className="forgot-password">
              ¿Olvidó su contraseña?
            </a>
          </div>
        </div>

        <div className="login-footer">
          <button className="login-button">Iniciar Sesión</button>
          <p className="register-text">
            ¿No tiene una cuenta?{" "}
            <a href="#" className="register-link">
              Regístrese
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage