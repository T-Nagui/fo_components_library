import React from 'react';
import type { ButtonProps } from './Button.types';
// import 'bootstrap.css';

const Button = ({ type = 'button', size, disabled, primary, text, onClick, ...props }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...props}
      className="btn btn-default"
    >
      {text}
    </button>
  );
};

export default Button;
