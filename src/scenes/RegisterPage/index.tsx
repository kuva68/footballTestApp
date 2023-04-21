import styles from "./styles";
import FcBackground from "@components/Background";
import BaseButton from "@components/BaseButton";
import BaseText from "@components/BaseText";
import CSafeAreaView from "@components/CSafeAreaView";
import { Images } from "@constants/Images";
import { useNavigation } from "@react-navigation/native";
import { GenericNavigationProps } from "@routes/types";
import customTheme from "@theme";
import { scaledSize, scaledY } from "@utils/scaleSize";
import { Image, Box } from "native-base";
import React, { FC, memo } from "react";
import { StatusBar } from "react-native";

const Home: FC = () => {
  const navigation = useNavigation<GenericNavigationProps>();

  const emailLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <CSafeAreaView>
      <StatusBar barStyle="light-content" />
      <FcBackground />
      <Image
        source={Images.logo_3_logotype}
        height={scaledSize(50)}
        width={scaledSize(333)}
        mt={scaledSize(58)}
        alignSelf="center"
      />
      <BaseText
        textAlign="center"
        fontSize={17}
        fontWeight="bold"
        alignSelf="center"
        mt={scaledY(16.7)}
      >
        Witaj w Football Challenge
      </BaseText>

      <Box
        minHeight={scaledY(428)}
        position="absolute"
        bottom={0}
        alignSelf="center"
        bg={customTheme.colors.primaryBackground}
        width={scaledSize(375)}
        borderTopLeftRadius={32}
        borderTopRightRadius={32}
        pb={scaledSize(34)}
        alignItems="center"
      >
        <BaseText textAlign="center" alignSelf="center" mt={scaledY(19)}>
          Masz już konto?
        </BaseText>

        <BaseButton
          textContent="Zaloguj się"
          style={styles.mt2}
          variant="filled"
          onPress={() => null}
        />

        <BaseText textAlign="center" alignSelf="center" mt={scaledY(19)}>
          lub Zarejestruj się
        </BaseText>
        <BaseButton
          textContent="Użyj konta Google"
          style={styles.mt}
          variant="outlined"
          onPress={() => null}
          leftIcon="google"
        />
        <BaseButton
          textContent="Użyj konta Facebook"
          style={styles.mt}
          variant="outlined"
          onPress={() => null}
          leftIcon="facebook"
        />
        <BaseButton
          textContent="Użyj konta Apple"
          style={styles.mt}
          variant="outlined"
          onPress={() => null}
          leftIcon="apple"
        />
        <BaseButton
          textContent="Zarejestruj się E-mailem"
          style={styles.mt}
          variant="outlined"
          onPress={emailLogin}
          leftIcon="email"
        />
      </Box>
    </CSafeAreaView>
  );
};

export default memo(Home);
