import React from 'react';
import { TouchableOpacity } from 'react-native';
import { act, create } from 'react-test-renderer';
import PressablePagination from './PressablePagination';

describe('Pressable Pagination', () => {
  const defaultData = [
    {
      text: 'text-one',
      value: 'value-one',
    },
    {
      text: 'text-two',
      value: 'value-two',
    },
    {
      text: 'text-three',
      value: 'value-three',
    },
  ];

  const mockOnPress = jest.fn();

  const defaultProps = {
    scrollX: {
      value: 0,
      interpolate: jest.fn(),
      addListener: jest.fn(),
      removeListener: jest.fn(),
      removeAllListeners: jest.fn(),
      hasListeners: jest.fn(),
    },
    getIndex: mockOnPress,
    itemWidth: 300,
    data: defaultData,
  };

  test('should render 3 pagination indicators', () => {
    const rendered = create(<PressablePagination {...defaultProps} />);

    const paginationIndicators = rendered.root.findAllByType(TouchableOpacity);

    expect(paginationIndicators).toHaveLength(3);
  });

  test('should advance pagination indicator to correct index onPress', () => {
    const rendered = create(<PressablePagination {...defaultProps} />);

    act(() => {
      rendered.root.findAllByType(TouchableOpacity)[1].props.onPress();
    });

    expect(mockOnPress).toBeCalledWith(1);
  });
});
