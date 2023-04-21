import { scaledSize, scaledY } from '@utils/scaleSize';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: scaledSize(375),
    height: scaledY(427),
  },
  Dot_brand: {
    position: 'absolute',
    top: scaledY(214),
    left: scaledSize(111),
    width: scaledSize(11),
    height: scaledSize(11),
  },
  Line_brand: {
    position: 'absolute',
    top: scaledY(214),
    left: scaledSize(0),
    width: scaledSize(95),
    height: scaledSize(11),
  },
  Smile_brand: {
    position: 'absolute',
    top: scaledY(338),
    left: scaledSize(238),
    width: scaledSize(46),
    height: scaledSize(93),
  },
  gate_brand: {
    position: 'absolute',
    top: scaledY(142),
    left: scaledSize(349),
    width: scaledSize(26),
    height: scaledSize(72),
  },
});
