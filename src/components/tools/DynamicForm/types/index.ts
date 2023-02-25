import { InputHTMLAttributes, ReactNode, RefObject } from 'react';
import { FormHandles } from '@unform/core';
import { z } from 'zod';

import { KeysOfComponentMapping } from '../utils/componentMapping';

export interface iInputProps<T> extends InputHTMLAttributes<HTMLInputElement> {
  input_name: keyof T;
  placeholder?: string;
  label?: string;
  clearErrorOnKeyDown?: boolean;
  type?: KeysOfComponentMapping;
}

export interface iDynamicFormProps<T> {
  inputs?: iInputProps<T>[];
  schema?: z.Schema<T>;
  onSubmit: (fields: T) => void | Promise<void>;
  children?: ReactNode;
  formRef?: RefObject<FormHandles>;
}
