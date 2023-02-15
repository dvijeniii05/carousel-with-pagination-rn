import { Animated, ViewStyle } from "react-native";

const parentContainer = (
  height: number,
  paginataionBackgroundColor: string
): ViewStyle => {
  return {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: paginataionBackgroundColor,
    height: height, //only needed when height is dynamically set for each pagination item
  };
};

const buttonContainer = (paddingHorizontal: number): ViewStyle => {
  return {
    paddingHorizontal,
  };
};

const buttonStyle = (
  indicatorWidth: Animated.AnimatedInterpolation<string | number>,
  indicatorHeight: Animated.AnimatedInterpolation<string | number>,
  backgroundColor: Animated.AnimatedInterpolation<string | number>,
  borderRadius: number
): Animated.Animated => {
  return {
    width: indicatorWidth,
    height: indicatorHeight,
    borderRadius,
    marginHorizontal: 3,
    backgroundColor,
  };
};

export const styles = {
  parentContainer,
  buttonContainer,
  buttonStyle,
};
