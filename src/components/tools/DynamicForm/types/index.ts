import { InputHTMLAttributes, ReactNode, RefObject } from 'react';
import { FormHandles } from '@unform/core';
import { z } from 'zod';

export interface iInputProps<T> extends InputHTMLAttributes<HTMLInputElement> {
  input_name: keyof T;
  placeholder?: string;
  label?: string;
  clearErrorOnKeyDown?: boolean;
}

export interface iDynamicFormProps<T> {
  inputs?: iInputProps<T>[];
  schema?: z.Schema<T>;
  onSubmit: (fields: T) => void | Promise<void>;
  children?: ReactNode;
  formRef?: RefObject<FormHandles>;
}
