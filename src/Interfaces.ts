import { Animated, ListRenderItem, StyleProp, ViewStyle } from 'react-native';

export interface CustomCarouselProps {
  data: Array<any>;
  renderItem: ListRenderItem<any>;
  carouselContainerStyle?: StyleProp<ViewStyle>;
  /**
     * Is used to adjust inputRange of interpolated animations.
     * 
     * Has to match to the width of renderItem.
     * 
     * If not set, the screen width will be used.
     ```
     Dimensions.get('window').width
     ```
     */
  widthBoundaryConfig?: number;
  isEndReached?: (endReached: boolean) => void;
  contentContainerStyle?: StyleProp<ViewStyle>;
  paginationContainerStyle?: StyleProp<ViewStyle>;
}

export interface PressablePaginationProps {
  data: Array<any>;
  scrollX: Animated.AnimatedInterpolation;
  getIndex: (idx: number) => void;
  itemWidth: number;
}
