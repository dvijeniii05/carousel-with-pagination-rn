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
    <View style={props.contentContainerStyle} testID="content-container">
      <FlatList
        ref={ref}
        data={props.data}
        renderItem={props.renderItem}
        style={props?.carouselContainerStyle}
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
          itemWidth={
            props.widthBoundaryConfig ? props.widthBoundaryConfig : WIDTH
          }
        />
      </View>
    </View>
  );
};

export default CustomCarousel;
