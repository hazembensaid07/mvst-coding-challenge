import React, { ChangeEvent } from "react";
import "./Input.css";

/**
 * InputProps defines the structure and types of the properties.
 *
 * @interface
 * @property {string} type - Specifies the type of the input (e.g., 'text', 'email', 'password').
 * @property {string} [label] - Optional label for the input, displayed above the field.
 * @property {(event: ChangeEvent<HTMLInputElement>) => void} onChange - Callback function invoked on input value change.
 * @property {string} value - Controlled value of the input field.
 * @property {string} [placeholder] - Optional placeholder text for the input when it is empty.
 */
interface InputProps {
  type: string;
  label?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
}

/**
 * A functional component that renders an input field with an optional label.
 * The input supports various HTML input types and configurations.
 *
 * @param {InputProps} props - The props object for the Input component.
 * @returns {React.ReactElement} The TSX for the Input component.
 */
const Input: React.FC<InputProps> = ({
  type,
  label,
  onChange,
  value,
  placeholder,
}) => {
  return (
    <div className="inputText">
      {label && <label className="labelElement">{label}:</label>}
      <input
        className="textInput"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
