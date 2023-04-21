import BaseText from "@components/BaseText";
import { Images } from "@constants/Images";
import customTheme from "@theme";
import { scaledSize } from "@utils/scaleSize";
import { Image, Pressable, Box } from "native-base";
import React, { FC, memo, useMemo } from "react";

interface CardProps {
  title: string;
  description: string;
  image: "player" | "viewers" | "organizator" | "coach";
}
const Card: FC<CardProps> = ({ title, description, image }) => {
  const imageSource = useMemo(() => {
    switch (image) {
      case "coach":
        return Images.Coach;
      case "organizator":
        return Images.Organizator;
      case "player":
        return Images.Player;
      default:
        return Images.Viewers;
    }
  }, [image]);
  return (
    <Pressable
      alignSelf="center"
      alignItems="flex-end"
      flexDirection="row"
      width={scaledSize(333) + "px"}
      height={scaledSize(96) + "px"}
      borderRadius={"12px"}
      mb={scaledSize(20) + "px"}
      borderWidth={1}
      borderColor={customTheme.colors.PRIMARY_BTN}
      bg={customTheme.colors.PRIMARY_BTN}
      shadow={4}
    >
      <Image
        borderBottomLeftRadius={"12px"}
        source={imageSource}
        height={scaledSize(112) + "px"}
        width={scaledSize(100) + "px"}
        resizeMode="stretch"
      />

      <Box
        pl={scaledSize(15) + "px"}
        height={scaledSize(94) + "px"}
        width={scaledSize(231) + "px"}
        borderRightRadius={"12px"}
        alignSelf="center"
        mr={1}
        bg={customTheme.colors.TEXT_BLUE}
      >
        <BaseText mt={scaledSize(13) + "px"}>{title}</BaseText>
        <BaseText fontSize={scaledSize(12) + "px"} fontWeight="400">
          {description}
        </BaseText>
      </Box>
    </Pressable>
  );
};

export default memo(Card);
