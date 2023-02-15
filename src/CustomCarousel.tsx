import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CustomCarouselProps } from "./Interfaces";
import PressablePagination from "./PressablePagination/PressablePagination";

const { width: WIDTH } = Dimensions.get("window");

const CustomCarousel = (props: CustomCarouselProps) => {
  const ref = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

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
    ref.current?.scrollToIndex({ index: index });
  };

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={props.mainContainerStyle} testID="content-container">
      <FlatList
        ref={ref}
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
};

export default CustomCarousel;
