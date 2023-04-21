import React, { FC } from 'react';
import { ImageBackground, Image } from 'react-native';
import { Images } from '../../constants/Images';
import styles from './styles';

const FcBackground: FC = () => {
  return (
    <ImageBackground source={Images.fcBackground} resizeMode="stretch" style={styles.background}>
      <Image style={styles.Dot_brand} source={Images.Dot_brand} />
      <Image style={styles.Line_brand} source={Images.Line_brand} />
      <Image style={styles.Smile_brand} source={Images.Smile_brand} resizeMode="stretch" />
      <Image style={styles.gate_brand} source={Images.gate_brand} />
    </ImageBackground>
  );
};

export default FcBackground;
