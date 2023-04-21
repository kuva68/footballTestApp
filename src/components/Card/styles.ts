import customTheme from '@theme';
import { scaledSize } from '@utils/scaleSize';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    borderBottomLeftRadius: 12,
    height: scaledSize(96),
    width: scaledSize(110),
    backgroundColor: customTheme.colors.PRIMARY_BTN,
  },
});
