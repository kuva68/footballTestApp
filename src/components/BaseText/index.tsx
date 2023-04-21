import customTheme from '@theme';
import { Text } from 'native-base';
import { InterfaceTextProps } from 'native-base/lib/typescript/components/primitives/Text/types';
import React from 'react';

const BaseText = (props: InterfaceTextProps) => {
  return (
    <Text
      color={customTheme.colors.lightText}
      fontSize={14}
      fontWeight="500"
      fontFamily="AeonikTRIAL-Regular"
      {...props}>
      {props.children}
    </Text>
  );
};
export default BaseText;
