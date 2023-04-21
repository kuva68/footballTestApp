import { Box } from 'native-base';
import React, { FC, ReactNode } from 'react';

interface CSafeAreaViewProps {
  children: ReactNode;
}

const CSafeAreaView: FC<CSafeAreaViewProps> = props => {
  return (
    <Box width="100%" height="100%" {...props}>
      {props.children}
    </Box>
  );
};

export default CSafeAreaView;
