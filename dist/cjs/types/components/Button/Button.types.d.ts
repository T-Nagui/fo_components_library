import { MouseEventHandler } from 'react';
export type ButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    onClick?: MouseEventHandler<HTMLButtonElement>;
};
