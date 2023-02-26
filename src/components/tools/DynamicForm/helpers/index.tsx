import { InputProps } from '../types';
import { componentMapping } from '../utils/componentMapping';

export function handleRenderInputs<T>(
  props: InputProps<T>,
  index: any
): JSX.Element {
  const Component = componentMapping[props.type || 'text'];

  return <Component {...props} name={props.input_name as string} key={index} />;
}
