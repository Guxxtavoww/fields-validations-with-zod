import { ReactNode, RefObject } from 'react';
import { FormHandles } from '@unform/core';
import { z } from 'zod';

import { iInputProps } from '../../FormComponents';

export type InputProps<T> = Omit<
  iInputProps & { input_name: keyof T },
  'name' | 'id'
>;

export interface iDynamicFormProps<T> {
  inputs?: InputProps<T>[];
  schema?: z.Schema<T>;
  onSubmit: (fields: T) => void | Promise<void>;
  children?: ReactNode;
  formRef?: RefObject<FormHandles>;
}
