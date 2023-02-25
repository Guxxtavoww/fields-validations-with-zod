import { iInputProps } from '../types';
import { componentMapping } from '../utils/componentMapping';

export function handleRenderInputs<T>(
  props: iInputProps<T>,
  index: any
): JSX.Element {
  const Component = componentMapping[props.type || 'text'];

  return <Component {...props} name={props.input_name as string} key={index} />;
}
