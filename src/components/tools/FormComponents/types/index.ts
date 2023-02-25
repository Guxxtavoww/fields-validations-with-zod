import { InputHTMLAttributes } from 'react';

export interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder?: string;
  label?: string;
  clearErrorOnKeyDown?: boolean;
}
