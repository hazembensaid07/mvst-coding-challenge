import React, { useState, useEffect } from "react";
import "./ErrorMessage.css";

/**
 * ErrorMessageProps defines the props expected by the ErrorMessage component.
 * It requires a 'message' prop that determines the text displayed in the error message.
 *
 * @interface
 * @property {string} message - The error message text to be displayed.
 */
interface ErrorMessageProps {
  message: string;
}

/**
 * ErrorMessage is a functional React component that displays an error message.
 * The message  disapears automatically after 3 seconds.
 *
 * @param {ErrorMessageProps} props - The props object with type ErrorMessageProps.
 * @returns {React.ReactElement | null} The TSX code for displaying the error message or null if not visible.
 */
const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  // State to manage the visibility of the error message.
  const [isVisible, setIsVisible] = useState<boolean>(true);

  // Effect hook to hide the error message after 3 seconds.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [message]);
  // Render the error message if it is visible; otherwise, render null.
  return isVisible ? <div className="error-message">{message}</div> : null;
};

export default ErrorMessage;
