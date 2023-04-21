import customTheme from '@theme';
import { scaledSize } from '@utils/scaleSize';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  icon: { position: 'absolute', alignSelf: 'center', left: 2 },
  touchable: {
    width: scaledSize(333),
    borderRadius: 12,
    height: scaledSize(48),
    borderColor: customTheme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
