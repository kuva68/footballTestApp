import Icons from '@constants/Icons';
import { Images } from '@constants/Images';
import { useNavigation } from '@react-navigation/native';
import { scaledSize } from '@utils/scaleSize';
import { Image, Center } from 'native-base';
import React, { FC, memo } from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './styles';

const Header: FC = () => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  return (
    <Center w={scaledSize(349)} mt={scaledSize(58)} alignSelf="center" zIndex={1000}>
      <TouchableOpacity style={styles.icon} onPress={goBack}>
        <Icons.ArrowLeft height={20} width={20} />
      </TouchableOpacity>

      <Image source={Images.logo_3_logotype} height={scaledSize(33)} width={scaledSize(295)} resizeMode="contain" />
    </Center>
  );
};

export default memo(Header);
