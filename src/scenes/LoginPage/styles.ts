import customTheme from '@theme';
import { scaledSize, scaledY } from '@utils/scaleSize';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  view: {
    minHeight: scaledY(672),
    position: 'absolute',
    bottom: -240,
    alignSelf: 'center',
    backgroundColor: customTheme.colors.primaryBackground,
    width: scaledSize(375),
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingBottom: scaledSize(290),
    alignItems: 'center',
    zIndex: 1001,
  },
  icon: { position: 'absolute', left: 0, alignSelf: 'center' },
  gigText: {
    fontSize: 52,
    fontWeight: 'bold',
    color: customTheme.colors.WHITE,
    letterSpacing: 5,
    lineHeight: 80,
    color: customTheme.colors.TEXT_BLUE,
    fontFamily: 'MonumentExtended-Regular',
  },
  mt2: { marginTop: scaledSize(24) },
});
