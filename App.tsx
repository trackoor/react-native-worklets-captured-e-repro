import React from "react";
import { Text } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

const _e = 41;

export default function App() {
  const style = useAnimatedStyle(() => {
    return { opacity: _e > 0 ? 1 : 0 };
  });
  return (
    <Animated.View style={style}>
      <Text>Hello</Text>
    </Animated.View>
  );
}
