import { InputHTMLAttributes, ReactNode, RefObject } from 'react';
import { FormHandles } from '@unform/core';
import { z } from 'zod';

import { LooseAutoComplete } from '@/types';

export interface iInputProps<T> extends InputHTMLAttributes<HTMLInputElement> {
  input_name: LooseAutoComplete<keyof T>;
  placeholder?: string;
  label?: string;
}

export interface iDynamicFormProps<T> {
  inputs?: iInputProps<T>[];
  schema?: z.Schema<T>;
  onSubmit: (fields: T) => void;
  children?: ReactNode;
  formRef?: RefObject<FormHandles>;
}
