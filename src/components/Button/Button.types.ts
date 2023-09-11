import { MouseEventHandler } from 'react';

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  text?: string;
  color?: 'primary' | 'secondary' | string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'block';
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
