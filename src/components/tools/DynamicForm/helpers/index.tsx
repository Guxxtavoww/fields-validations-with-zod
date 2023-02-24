import { lazy } from 'react';

import { iInputProps } from '../types';

export function handleRenderInputs<T>(props: iInputProps<T>, index: any): JSX.Element {
  const componentMapping = {
    text: lazy(() => import('../../Input')),
    number: lazy(() => import('../../Input')),
    email: lazy(() => import('../../Input')),
    password: lazy(() => import('../../Input')),
  }

  const Component = componentMapping[props.type as keyof typeof componentMapping];

  return <Component {...props} name={props.input_name as string} key={index} />
};
