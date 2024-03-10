import React from "react";
import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
/**
 * ButtonProps defines the structure and types of the properties.
 *
 * @interface
 * @property {string} text - The text displayed on the button.
 * @property {() => void} onClick - The function to call when the button is clicked.
 * @property {string} [className] - Optional additional CSS classes to apply to the button.
 * @property {boolean} [disabled] - Optional flag to disable the button.
 * @property {IconDefinition} [icon] - Optional icon to display on the button, from FontAwesome.
 */
interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  icon?: IconDefinition;
}

/**
 * Button is a functional React component that renders a button element with optional icon and text.
 * It can be customized with additional CSS classes and can be disabled.
 *
 * @param {ButtonProps} props - The props object for the Button component with type ButtonProps and attributes destructured.
 * @returns {React.ReactElement} A button element.
 */
export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled,
  className,
  icon,
}) => {
  return (
    <button className={`${className}`} onClick={onClick} disabled={disabled}>
      {icon && <FontAwesomeIcon className="icon-spacing" icon={icon} />}
      {text}
    </button>
  );
};
