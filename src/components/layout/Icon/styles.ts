import styled from 'styled-components';

interface Props {
  icon: string;
  color?: string;
  hoverColor?: string;
}

export const IconContainer = styled.div<Props>`
  width: 25px;
  height: 25px;
  background-color: ${props => props.color || 'inherit'};
  -webkit-mask: ${props => `url(${props.icon}) no-repeat center`};
  mask: ${props => `url(${props.icon}) no-repeat center`};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.hoverColor || props.color || 'inherit'};
  }
`;
