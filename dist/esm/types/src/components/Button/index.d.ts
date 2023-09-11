import React from 'react';
import type { ButtonProps } from './Button.types';
import 'assets/style.scss';
declare const Button: ({ type, size, disabled, color, text, onClick, ...props }: ButtonProps) => React.JSX.Element;
export default Button;
