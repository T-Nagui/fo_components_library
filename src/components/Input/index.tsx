import React from 'react';
import { InputProps } from './Input.types';

const Input = ({
  type = 'text',
  disabled,
  error,
  id,
  label,
  errorMessage,
  onChange,
  placeholder,
  success,
  fieldName,
  customClass,
  adornment,
  icon,
  required,
  ...props
}: InputProps) => {
  return (
    <>
      <div className="form-floating mt-16">
        <input
          type={type}
          placeholder={placeholder || label}
          className={`form-control ${errorMessage ? 'is-invalid' : ''} ${customClass}`}
          id={fieldName}
          //   {...register(fieldName, {
          //     ...(!!maxLength && { max: maxLength }),
          //     //@ts-ignore
          //     valueAsNumber: type === 'number' && !patternObject,
          //     ...(validate && { validate: validate }),
          //     required: required || validationMessage,
          //     ...(!!patternObject && type !== 'number' && { pattern: { ...patternObject } }),
          //   })}
          {...props}
          required={required}
          onWheel={(e) => e.currentTarget.blur()}
          disabled={disabled}
          autoComplete={type === 'email' ? `username` : 'off'}
        />
        <label htmlFor={fieldName}>{label}</label>

        {!!adornment && (
          <div className={`adornment-right ${errorMessage ? 'pr-24' : ''}`}>
            <span className="">{adornment}</span>
          </div>
        )}
        {!!icon && (
          <div className={`adornment-right ${errorMessage ? 'pr-24' : ''}`}>
            <span className={`fo-icon fo-icon-${icon}`}></span>
          </div>
        )}
      </div>

      <p className={`fo-text-sm invalid-feedback mt-8 ${errorMessage ? 'was-validated' : ''}`}>
        {errorMessage as string}
      </p>
    </>
  );
};

export default Input;
