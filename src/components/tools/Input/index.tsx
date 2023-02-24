import React, { useId, useRef, useEffect, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';

import { InputContainer, InputLabel } from './styles';

export interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder?: string;
  label?: string;
}

const Input: React.FC<iInputProps> = ({
  label,
  name,
  placeholder,
  type,
  ...rest
}) => {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, clearError, defaultValue, error } =
    useField(name);

  const uniqueId = `${name}${inputId}`;
  const path = type === 'checkbox' || type === 'radio' ? 'checked' : 'value';

  useEffect(() => {
    console.log({ inputError: error });
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path,
      setValue: (ref, value) => {
        ref.value = value;
        clearError();
      },
    });
  }, [fieldName, registerField, clearError, path, error]);

  return (
    <InputContainer>
      <InputLabel htmlFor={uniqueId}>{label}</InputLabel>
      <input
        name={name}
        id={uniqueId}
        ref={inputRef}
        placeholder={placeholder}
        defaultValue={defaultValue}
        type={type}
        {...rest}
      />
      {error && <span style={{ color: '#f00', fontWeight: 600 }}>{error}</span>}
    </InputContainer>
  );
};

export default Input;
