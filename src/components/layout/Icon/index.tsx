import React from 'react';

import { IconContainer } from './styles';

interface iIconProps {
  color?: string;
  hoverColor?: string;
  icon: string;
}

const Icon: React.FC<iIconProps> = props => <IconContainer {...props} />;

export default Icon;
