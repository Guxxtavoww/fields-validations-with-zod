import React, { useId, useRef, useEffect, useCallback } from 'react';
import { useField } from '@unform/core';

import { inputDateIcon } from '@/assets';

import { iInputProps } from '../types';
import { InputLabel } from '../styles';
import Icon from '../../../layout/Icon';
import { DateInputContainer } from './styles';

const DateInput: React.FC<iInputProps> = ({
  label,
  name,
  placeholder,
  type,
  clearErrorOnKeyDown,
  ...rest
}) => {
  const inputId = useId();
  const dateInputRef = useRef<HTMLInputElement>(null);
  const { clearError, defaultValue, error, fieldName, registerField } =
    useField(name);

  const uniqueId = `${name}${inputId}`;

  const handleClearError = useCallback(() => {
    clearError();
  }, [clearError]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: dateInputRef.current,
      path: 'value',
      setValue: (ref, value) => {
        ref.value = value;
        clearError();
      },
    });
  }, [fieldName, registerField, clearError]);

  return (
    <DateInputContainer hasError={!!error}>
      <InputLabel htmlFor={uniqueId} hasError={!!error}>
        {label || ''}
      </InputLabel>
      <div className="input-wrapper">
        <input
          type="date"
          placeholder={placeholder}
          name={name}
          id={uniqueId}
          ref={dateInputRef}
          defaultValue={defaultValue}
          onFocus={handleClearError}
          onKeyDown={() => clearErrorOnKeyDown && handleClearError()}
          {...rest}
        />
        <label htmlFor={uniqueId} className="icon">
          <Icon icon={inputDateIcon} color="#0095E8" />
        </label>
      </div>
      <span className="error">{error && error}</span>
    </DateInputContainer>
  );
};

export default DateInput;
