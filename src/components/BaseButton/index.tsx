import styles from "./styles";
import BaseText from "@components/BaseText";
import Icons from "@constants/Icons";
import customTheme from "@theme";
import { scaledSize } from "@utils/scaleSize";
import { Center } from "native-base";
import React, { FC } from "react";
import { TouchableOpacity, ViewStyle } from "react-native";

interface BaseButtonProps {
  textContent: string;
  variant: "filled" | "outlined" | "base";
  onPress: () => void;
  style: ViewStyle;
  leftIcon?: "google" | "facebook" | "apple" | "email";
}
const BaseButton: FC<BaseButtonProps> = ({
  textContent,
  variant,
  onPress,
  style,
  leftIcon,
}) => {
  const getLeftIcon = () => {
    switch (leftIcon) {
      case "apple":
        return <Icons.Apple width={24} height={24} style={styles.icon} />;
      case "facebook":
        return <Icons.Facebook width={24} height={24} style={styles.icon} />;
      case "email":
        return <Icons.Mail width={24} height={24} style={styles.icon} />;
      case "google":
        return <Icons.Google width={24} height={24} style={styles.icon} />;
      default:
        return null;
    }
  };
  return (
    <TouchableOpacity
      style={[
        styles.touchable,
        {
          borderWidth: variant === "outlined" ? 1 : 0,
          backgroundColor:
            variant === "filled" ? customTheme.colors.primary : "transparent",
        },
        style,
      ]}
      onPress={onPress}
    >
      <Center width={scaledSize(309)}>
        {variant === "outlined" && getLeftIcon()}

        <BaseText textAlign="center" width={309 - 24} fontSize={17}>
          {textContent}
        </BaseText>
      </Center>
    </TouchableOpacity>
  );
};
export default BaseButton;
