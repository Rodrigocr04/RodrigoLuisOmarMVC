import type React from "react"
import "./InputField.css"

interface InputFieldProps {
  type: string
  label: string
  placeholder?: string
  required?: boolean
}

export const InputField: React.FC<InputFieldProps> = ({ type, label, placeholder, required = false }) => {
  const id = label.toLowerCase().replace(/\s+/g, "-")

  return (
    <div className="input-field-container">
      <div className="input-field-label-container">
        <label htmlFor={id} className="input-field-label">
          {label}
        </label>
        {required && <span className="input-field-required">*Requerido</span>}
      </div>
      <input type={type} id={id} placeholder={placeholder} className="input-field" />
    </div>
  )
}