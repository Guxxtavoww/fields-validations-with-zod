import { lazy } from 'react';

import { iInputProps } from '../types';

export function handleRenderInputs<T>(
  props: iInputProps<T>,
  index: any
): JSX.Element {
  const componentMapping = {
    text: lazy(() => import('../../FormComponents/Input')),
    number: lazy(() => import('../../FormComponents/Input')),
    email: lazy(() => import('../../FormComponents/Input')),
    password: lazy(() => import('../../FormComponents/Input')),
    date: lazy(() => import('../../FormComponents/DateInput')),
  };

  const Component =
    componentMapping[(props.type as keyof typeof componentMapping) || 'text'];

  return <Component {...props} name={props.input_name as string} key={index} />;
}
