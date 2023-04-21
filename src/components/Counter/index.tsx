import styles from "./styles";
import BaseText from "@components/BaseText";
import customTheme from "@theme";
import { scaledSize } from "@utils/scaleSize";
import { Box } from "native-base";
import React, { memo, useEffect } from "react";
import Animated, {
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const Counter = ({ page, visible }: { page: number; visible: boolean }) => {
  const progress = useSharedValue(scaledSize(0));
  const progressFullWidth = scaledSize(333);
  useEffect(() => {
    progress.value = withTiming((progressFullWidth / 4) * (page + 1), {
      duration: 400,
    });
  }, [page]);
  const progressStyle = useAnimatedStyle(() => {
    return {
      width: progress.value,
    };
  });
  return (
    <Box w={scaledSize(375)} mt={-5}>
      <Box
        justifyContent="space-between"
        w={scaledSize(333)}
        flexDirection="row"
        alignSelf="center"
        alignItems="flex-end"
      >
        <BaseText fontWeight="400" mb={4}>
          Krok:
        </BaseText>
        <Box flexDirection="row">
          {visible && (
            <Animated.Text
              entering={FadeInUp.duration(400)}
              style={styles.gigText}
            >
              {page + 1}
            </Animated.Text>
          )}
          <Animated.Text style={styles.gigText}>/4</Animated.Text>
        </Box>
      </Box>
      <Box
        alignSelf="center"
        width={scaledSize(333)}
        height={scaledSize(9) + "px"}
        bg={customTheme.colors.MIDNIGHT_BLUE}
      >
        <Animated.View style={[styles.progress, progressStyle]} />
      </Box>
    </Box>
  );
};

export default memo(Counter);
