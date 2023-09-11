import React from 'react';
import type { ButtonProps } from './Button.types';
// import '~assets/style.scss';

const Button = ({ type = 'button', size, disabled, color, text, onClick, ...props }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...props}
      className={`btn btn-${size} btn-${size} btn-${color || 'default'}`}
    >
      {text}
    </button>
  );
};

export default Button;
