import { ChangeEventHandler } from 'react';

export type InputProps = {
  id?: string;
  fieldName?: string;
  label?: string;
  error?: boolean;
  errorMessage?: string;
  success?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  customClass?: string;
  type?: 'text' | 'number' | 'email';
  required?: boolean;
  adornment?: string;
  icon?: string;
};
