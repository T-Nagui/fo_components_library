import React, { MouseEventHandler, ChangeEventHandler } from 'react';

type ButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    text?: string;
    color?: 'primary' | 'secondary' | string;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'block';
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

declare const Button: ({ type, size, disabled, color, text, onClick, ...props }: ButtonProps) => React.JSX.Element;

type InputProps = {
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

declare const Input: ({ type, disabled, error, id, label, errorMessage, onChange, placeholder, success, fieldName, customClass, adornment, icon, required, ...props }: InputProps) => React.JSX.Element;

export { Button, Input };
