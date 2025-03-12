import React from "react";
import "./InputField.css";

interface InputFieldProps {
  type: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  type,
  label,
  placeholder,
  required = false,
  value,
  onChange,
}) => {
  const id = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="input-field-container">
      <div className="input-field-label-container">
        <label htmlFor={id} className="input-field-label">
          {label}
        </label>
        {required && <span className="input-field-required">*Requerido</span>}
      </div>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="input-field"
        value={value} // Asigna el valor
        onChange={onChange} // Maneja los cambios
        required={required} // Agrega la propiedad required
      />
    </div>
  );
};