/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import CustomCarousel from 'carousel-with-pagination-rn';
import {RefProps} from '../src/Interfaces';

const dummyData = [
  {
    id: 1,
    img: 'https://picsum.photos/400/600?random=1',
    title: 'Element 1',
    description: 'Pressable and animated pagination',
    price: 'Fast',
  },
  {
    id: 2,
    img: 'https://picsum.photos/400/600?random=2',
    title: 'Element 2',
    description: 'Full customization for carousel',
    price: 'Simple',
  },
  {
    id: 3,
    img: 'https://picsum.photos/400/600?random=3',
    title: 'Element 3',
    description: 'Accessible for VoiceOver',
    price: 'Efficient',
  },
];

const {width, height} = Dimensions.get('screen');

const CarouselScreen = () => {
  let carouselRef = useRef<RefProps>(null);

  const handleNextClick = () => {
    carouselRef.current?.showNextItem();
  };
  const handlePreviousClick = () => {
    carouselRef.current?.showPreviousItem();
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <CustomCarousel
          ref={carouselRef}
          data={dummyData}
          renderItem={({item}) => {
            return (
              <View style={styles.container}>
                <Image
                  source={{uri: item.img}}
                  style={styles.image}
                  resizeMode="contain"
                />

                <View style={styles.content}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
              </View>
            );
          }}
          disablePagination={true}
        />
        <View
          style={{
            flexDirection: 'row',
            width: 100,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={handlePreviousClick}>
            <Text>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNextClick}>
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height: 700,
    alignItems: 'center',
  },
  image: {
    flex: 0.8,
    width: '100%',
  },
  content: {
    flex: 0.4,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 18,
    marginVertical: 12,
    color: '#333',
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default CarouselScreen;
