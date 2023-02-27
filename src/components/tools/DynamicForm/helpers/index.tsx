import { InputProps } from '../types';
import { componentMapping } from '../utils/componentMapping';

export function handleRenderInputs<T>(
  props: InputProps<T>,
  index: any
): JSX.Element {
  const Component = componentMapping[props.type || 'text'];

  return (
    <Component name={props.input_name.toString()} key={index} {...props} />
  );
}
