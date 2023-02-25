import { lazy } from 'react';

export const componentMapping = {
  text: lazy(() => import('../../FormComponents/Input')),
  number: lazy(() => import('../../FormComponents/Input')),
  email: lazy(() => import('../../FormComponents/Input')),
  password: lazy(() => import('../../FormComponents/Input')),
  date: lazy(() => import('../../FormComponents/DateInput')),
};

export type KeysOfComponentMapping = keyof typeof componentMapping;
