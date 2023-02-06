import React from "react";
import { FlatList, ListRenderItemInfo, Text } from "react-native";
import { act, create } from "react-test-renderer";
import { fireEvent, waitFor } from "react-native-testing-library";

import CustomCarousel from "./CustomCarousel";
import PressablePagination from "./PressablePagination/PressablePagination";

interface renderItemProp {
  text: string;
  value: string;
}

const carouselItems = [
  {
    text: "text-one",
    value: "value-one",
  },
  {
    text: "text-two",
    value: "value-two",
  },
  {
    text: "text-three",
    value: "value-three",
  },
];

const defaultRenderItem = ({ item }: ListRenderItemInfo<renderItemProp>) => {
  return (
    <>
      <Text>{item.text}</Text>
      <Text>{item.value}</Text>
    </>
  );
};

const mockCurrentIndex = jest.fn();

const defaultProps = {
  data: carouselItems,
  renderItem: defaultRenderItem,
  isEndReached: mockCurrentIndex,
};

describe("Custom Carousel", () => {
  test("should render carousel component", () => {
    const rendered = create(<CustomCarousel {...defaultProps} />);

    const carouselContainer = rendered.root.findByProps({
      testID: "content-container",
    });

    expect(carouselContainer).toBeDefined();
  });

  test("should set correct current index when onEndReached triggered", async () => {
    const rendered = create(<CustomCarousel {...defaultProps} />);

    const flatList = rendered.root.findByType(FlatList);

    await waitFor(() => expect(flatList).toBeDefined());

    act(() => {
      flatList.props.onEndReached();
    });

    expect(mockCurrentIndex).toBeCalledWith(true);
  });

  test("onScroll triggers the animation", async () => {
    const rendered = create(<CustomCarousel {...defaultProps} />);

    const flatList = rendered.root.findByType(FlatList);

    await waitFor(() => expect(flatList).toBeDefined());

    fireEvent.scroll(flatList, {
      nativeEvent: {
        layoutMeasurement: { height: 500, width: 100 },
        contentSize: { height: 500, width: 100 },
        contentOffset: { x: 200, y: 0 },
      },
    });

    const pressablePagination =
      rendered.root.findByType(PressablePagination).props.scrollX;

    expect(pressablePagination).toEqual(
      expect.objectContaining({ _value: 200 })
    );
  });
});
