import { InputHTMLAttributes } from 'react';

import { KeysOfComponentMapping } from '../../DynamicForm/utils/componentMapping';

export interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  label?: string;
  clearErrorOnKeyDown?: boolean;
  type?: KeysOfComponentMapping;
}
