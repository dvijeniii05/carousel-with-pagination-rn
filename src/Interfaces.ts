import { Animated, ListRenderItem, StyleProp, ViewStyle } from "react-native";

export interface CustomCarouselProps
  extends Partial<
    Omit<
      PressablePaginationProps,
      "data" | "scrollX" | "getIndex" | "itemWidth"
    >
  > {
  /**
   * Used to pass in array of elements that should be rendered
   *
   * The same as data prop in FlatList component
   *
   */
  data: Array<any>;
  /**
   * Takes an item from data props and renders it as required
   *
   * The same as renderItem prop in FlatList component
   *
   */
  renderItem: ListRenderItem<any>;
  /**
   * Used to apply styling to the main container that wraps both: carousel and pagination
   *
   */
  mainContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Equivalent to 'style' prop in FlatList and has the same affect to the Carousel
   *
   */
  carouselContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Equivalent to 'contentContainerStyle' prop in FlatList and has the same affect to the Carousel
   *
   */
  carouselContentContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Used to apply styling to the container that wraps the pagination
   *
   */
  paginationContainerStyle?: StyleProp<ViewStyle>;
  /**
     * Is used to adjust inputRange of interpolated animations of pagination.
     * 
     * Has to match to the width of renderItem.
     * 
     * If not set, the device screen width will be used.
     ```
     Dimensions.get('window').width
     ```
     */
  widthBoundaryForPagination?: number;
  /**
   * Is used to disable pagination. Default is set to false.
   *
     ```
     disablePagination={true}
     ```
   */
  disablePagination?: boolean;
  /**
   * Called once the last element of the Carousel is displayed
   *
   */
  isEndReached?: (endReached: boolean) => void;
}

export interface PressablePaginationProps {
  data: Array<any>;
  scrollX: Animated.AnimatedInterpolation<string | number>;
  getIndex: (idx: number) => void;
  itemWidth: number;
  /**
     * Is used to adjust dynamic width of each pagination indicator.
     * 
     * Has to be an array of 3 numbers where the second element of array will be assigned to width of the active indicator
     * 
     * Default value is [20,40,20]
     * 
     * If static width is required, pass an array of three equal numbers as: [10,10,10]
     * Example:.
     ```
     indicatorWidth={[15,30,15]}
     ```
     */
  indicatorWidth: Array<number>;
  /**
     * Is used to adjust dynamic height of each pagination indicator.
     * 
     * Has to be an array of 3 numbers where the second element of array will be assigned to height of the active indicator
     * 
     * Default value is [15,15,15]
     * 
     * If static width is required, pass an array of three equal numbers as: [10,10,10]
     * Example:.
     ```
     indicatorHeight={[15,30,15]}
     ```
     */
  indicatorHeight: Array<number>;
  /**
     * Is used to adjust dynamic color of each pagination indicator.
     * 
     * Has to be an array of 3 strings/colors where the second element of array will be assigned to color of the active indicator
     * 
     * Default value is ['grey', 'black', 'grey']
     * 
     * If static width is required, pass an array of three equal numbers as: ['grey', 'grey', 'grey']
     * Example:.
     ```
     indicatorColor={['grey', 'black', 'grey']}
     ```
     */
  indicatorColor: Array<string>;
  /**
   * Is used to adjust borderRadius of each pagination indicator.
   *
   * Has to be a number
   *
   * Default value is 5
   */
  inidicatorBorderRadius: number;
  /**
   * Is used to adjust horizontalPadding of each pagination indicator.
   *
   * Has to be a number
   *
   * Default value is 10
   */
  indicatorHorizontalPadding: number;
  /**
   * Is used to change backgroundColor of each pagination container.
   *
   * Has to be a string
   *
   * Default value is 'transparent'
   */
  paginataionBackgroundColor: string;
}

export interface RefProps {
  showNextItem: () => void;
  showPreviousItem: () => void;
}
