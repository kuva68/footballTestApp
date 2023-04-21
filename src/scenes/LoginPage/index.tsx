import styles from "./styles";
import { useCreateUser } from "@api/hooks/useUser";
import FcBackground from "@components/Background";
import BaseButton from "@components/BaseButton";
import BaseText from "@components/BaseText";
import CSafeAreaView from "@components/CSafeAreaView";
import Counter from "@components/Counter";
import FormControl from "@components/FormControl";
import Header from "@components/Header";
import { scaledSize, scaledY } from "@utils/scaleSize";
import React, { FC, memo, useState } from "react";
import { useForm } from "react-hook-form";
import { StatusBar } from "react-native";
import Animated, {
  useAnimatedStyle,
  useAnimatedKeyboard,
  withTiming,
} from "react-native-reanimated";

const inputsArr = ["fullName", "phone", "email", "password"];
const descriptionArr = [
  "Imię i nazwisko",
  "Telefon",
  "E-mail",
  "Hasło (min 6 znaków, w tym cyfra)",
];

interface UserData {
  fullName: string;
  phone: string;
  email: string;
  password: string;
}

const Login: FC = () => {
  const [page, setPage] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const keyboard = useAnimatedKeyboard();
  const translateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(-keyboard.height.value * 0.8, {
            duration: 200,
          }),
        },
      ],
    };
  });
  const { mutate: createUser } = useCreateUser();

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: UserData) => {
    const dataObj = {
      username: data.fullName,
      email: data.email,
      password1: data.password,
      password2: data.password,
      first_name: "",
      last_name: "",
      is_fan: true,
      is_trainer: false,
      is_player: false,
      phone: data.phone,
      birthdate: "",
      referral_code_from: "",
      language: 0,
      auto_update_lang: true,
    };
    switch (page) {
      case 3:
        createUser(dataObj);
        reset();
        break;
      default:
        setVisible(false);
        setTimeout(() => setVisible(true), 300);
        setPage((prev) => prev + 1);
        break;
    }
  };
  const onFieldSubmit = handleSubmit(onSubmit);

  return (
    <CSafeAreaView>
      <StatusBar barStyle="light-content" />
      <FcBackground />
      <Header />

      <Animated.View style={[styles.view, translateStyle]}>
        <BaseText
          textAlign="center"
          alignSelf="center"
          mb={scaledY(25)}
          marginTop={scaledY(49)}
          fontSize={scaledSize(17)}
        >
          Utwórz konto
        </BaseText>
        <FormControl
          name={inputsArr[page]}
          control={control}
          error={errors[inputsArr[page]]}
          description={descriptionArr[page]}
        />
        <Counter visible={visible} page={page} />
        <BaseButton
          textContent="Dalej"
          style={styles.mt2}
          variant="filled"
          onPress={onFieldSubmit}
        />
      </Animated.View>
    </CSafeAreaView>
  );
};

export default memo(Login);
