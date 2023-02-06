import { Animated, ViewStyle } from 'react-native';

const parentContainer: ViewStyle = {
  flexDirection: 'row',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  height: 40, //only needed when height is dynamically set for each pagination item
};

const buttonContainer: ViewStyle = {
  paddingVertical: 15,
  paddingHorizontal: 10,
};

const buttonStyle = (
  widthAndHeight: Animated.AnimatedInterpolation,
  backgroundColor: Animated.AnimatedInterpolation
): Animated.Animated => {
  return {
    width: widthAndHeight,
    height: widthAndHeight,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor,
  };
};

export const styles = {
  parentContainer,
  buttonContainer,
  buttonStyle,
};
