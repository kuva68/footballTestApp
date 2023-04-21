import FcBackground from '@components/Background';
import BaseText from '@components/BaseText';
import CSafeAreaView from '@components/CSafeAreaView';
import Card from '@components/Card';
import Header from '@components/Header';
import { Images } from '@constants/Images';
import { useNavigation } from '@react-navigation/native';
import { GenericNavigationProps } from '@routes/types';
import customTheme from '@theme';
import { scaledSize, scaledY } from '@utils/scaleSize';
import { Pressable, ScrollView, Image, Box } from 'native-base';
import React, { FC, memo } from 'react';
import { StatusBar } from 'react-native';

const Home: FC = () => {
  const navigation = useNavigation<GenericNavigationProps>();

  return (
    <CSafeAreaView bg={customTheme.colors.primaryBackground}>
      <StatusBar barStyle="light-content" />
      <Header />
      <FcBackground />
      <ScrollView
        zIndex={1000}
        position="absolute"
        top={0}
        width={scaledSize(375) + 'px'}
        alignSelf="center"
        _contentContainerStyle={{ pb: scaledSize(100) + 'px', pt: scaledY(113) + 'px', alignItems: 'center' }}>
        <Pressable
          position="absolute"
          top={scaledSize(60) + 'px'}
          left={3}
          width={6}
          height={6}
          onPress={() => navigation.goBack()}
        />
        <Box
          zIndex={1001}
          alignSelf="center"
          bg={customTheme.colors.primaryBackground}
          width={scaledSize(375) + 'px'}
          borderTopLeftRadius={'32px'}
          borderTopRightRadius={'32px'}
          pb={scaledSize(34) + 'px'}
          alignItems="center">
          <Image
            position="absolute"
            left={0}
            top={scaledY(88) + 'px'}
            source={Images.BgVector}
            resizeMode="contain"
            width={scaledSize(375) + 'px'}
            height={scaledY(618) + 'px'}
          />
          <Image
            position="absolute"
            left={0}
            top={scaledY(88) + 'px'}
            source={Images.BgFVector}
            resizeMode="contain"
            width={scaledSize(192) + 'px'}
            height={scaledY(309) + 'px'}
          />
          <BaseText textAlign="center" fontSize={'17px'} fontWeight="bold" alignSelf="center" mt={scaledY(40) + 'px'}>
            Wybierz rodzaj konta
          </BaseText>
          <BaseText
            textAlign="center"
            alignSelf="center"
            mt={scaledY(24) + 'px'}
            fontSize={'12px'}
            mb={scaledY(32) + 'px'}>
            {`Wybierz rodzaj swojego konta. W późniejszym
etapie będzie możliwość zmiany lub dodania
innych typów konta.`}
          </BaseText>

          <Card
            title="Trener"
            description={`Zarządza drużynami, organizuje
wydarzenia i wprowadza statystyki
zawodników`}
            image="coach"
          />
          <Card
            title="Zavodnik"
            description={`Dołącza do drużyny i bierze udział w
sparingach oraz turniejach`}
            image="player"
          />
          <Card
            title="Kibic"
            description={`Obserwuje wydarzenia i drużyny,
może być opiekunem gracza`}
            image="viewers"
          />
          <Card
            title="Organizator"
            description={`Tworzy i organizuje sparingi, turnieje i
wydarzenia`}
            image="organizator"
          />
          <Box alignSelf="center">
            <BaseText textAlign="center" alignSelf="center" mt={scaledY(8)}>
              Tworząc konto zgadzasz się na warunki
            </BaseText>
            <BaseText textAlign="center" alignSelf="center" color={customTheme.colors.PRIMARY_BTN}>
              Regulaminu i Polityki Prywatności
            </BaseText>
          </Box>
        </Box>
      </ScrollView>
    </CSafeAreaView>
  );
};

export default memo(Home);
