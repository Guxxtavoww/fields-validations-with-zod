import styled from 'styled-components';

export const InputLabel = styled.label<{ hasError: boolean }>`
  color: ${props => (!props.hasError ? '#0d0d0d' : '#f00')};
  font-size: 12px;
  font-weight: 400;
  text-transform: capitalize;
  cursor: pointer;
`;
