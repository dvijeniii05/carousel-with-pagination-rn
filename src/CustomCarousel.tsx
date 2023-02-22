import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  Animated,
  Dimensions,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CustomCarouselProps, RefProps } from "./Interfaces";
import PressablePagination from "./PressablePagination/PressablePagination";

const { width: WIDTH } = Dimensions.get("window");

const CustomCarousel = forwardRef<RefProps, CustomCarouselProps>(
  (props, ref) => {
    const flatlistRef = useRef<FlatList>(null);
    const scrollX = useRef(new Animated.Value(0)).current;
    const [currentItemIndex, setCurrentItemIndex] = useState<number>(0);

    useImperativeHandle(
      ref,
      () => {
        return {
          showNextItem() {
            if (currentItemIndex < props.data.length - 1)
              flatlistRef.current?.scrollToIndex({
                index: currentItemIndex + 1,
              });
          },
          showPreviousItem() {
            if (currentItemIndex > 0)
              flatlistRef.current?.scrollToIndex({
                index: currentItemIndex - 1,
              });
          },
        };
      },
      [currentItemIndex]
    );

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                x: scrollX,
              },
            },
          },
        ],
        {
          useNativeDriver: false,
        }
      )(event);
    };

    const endReached = () => {
      props.isEndReached ? props.isEndReached(true) : null;
    };

    const scrollFunction = (index: any) => {
      flatlistRef.current?.scrollToIndex({ index: index });
    };

    const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
      setCurrentItemIndex(viewableItems[0].index);
    }).current;

    const viewabilityConfig = useRef({
      itemVisiblePercentThreshold: 50,
    }).current;

    return (
      <View
        style={[{ flexGrow: 0 }, props.mainContainerStyle]}
        testID="content-container"
      >
        <FlatList
          ref={flatlistRef}
          data={props.data}
          renderItem={props.renderItem}
          style={[{ flexGrow: 0 }, props.carouselContainerStyle]}
          contentContainerStyle={props.carouselContentContainerStyle}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToAlignment="center"
          onScroll={handleScroll}
          viewabilityConfig={viewabilityConfig}
          onViewableItemsChanged={onViewableItemsChanged}
          onEndReached={endReached}
        />
        <View
          style={props.paginationContainerStyle}
          accessibilityElementsHidden={true}
          importantForAccessibility={"no-hide-descendants"}
        >
          <PressablePagination
            data={props.data}
            scrollX={scrollX}
            getIndex={scrollFunction}
            itemWidth={props.widthBoundaryForPagination ?? WIDTH}
            indicatorHeight={props.indicatorHeight ?? [15, 15, 15]}
            indicatorWidth={props.indicatorWidth ?? [20, 40, 20]}
            indicatorColor={props.indicatorColor ?? ["grey", "black", "grey"]}
            paginataionBackgroundColor={
              props.paginataionBackgroundColor ?? "transparent"
            }
            inidicatorBorderRadius={props.inidicatorBorderRadius ?? 5}
            indicatorHorizontalPadding={props.indicatorHorizontalPadding ?? 10}
          />
        </View>
      </View>
    );
  }
);

export default CustomCarousel;
