import React from 'react';
import '../styles/Button.css';

interface ButtonProps {
  text: string;
  secondary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, secondary }) => {
  return (
    <button className={`button ${secondary ? 'button-secondary' : 'button-primary'}`}>
      {text}
    </button>
  );
};

export default Button;
