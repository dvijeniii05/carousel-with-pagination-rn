

<div align="center">

<h1>
Carousel With Pagination RN
</h1>

![version](https://img.shields.io/npm/v/carousel-with-pagination-rn?style=flat-square)
![npmtrends](https://img.shields.io/npm/dm/carousel-with-pagination-rn?color=purple&style=flat-square)


![carousel giph](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjIwZjc4MDI4NzZhZmE1NTVlYThlYTE2NTY1YzQ2NzFmNzAzOTJkYyZjdD1n/TabwFck9vEt44/giphy.gif)

</div>



Performant and accessible Carousel component for React-Native that can be used with images or nested components. Built on top of the pure FlatList component with additional styling and added animations. The pagination indicators allow user to navigate to a specific element of the carousel with animated indicator transition. All elements within the carousel are accessible for the user using the VoiceOverText feature of their device (iOS and Android)

Nothing special, but might be useful 😶‍🌫️

## 🤳 Showcase: 

![basic showcase](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjllYzg0ZWU4MDgyMTE3ZWQ1YzlmYjEyMjE3NWFjNWMwYTU3ZWU3MCZjdD1n/QtMNoS3HIPm1XdaISD/giphy.gif)

## 🚀 Installation:

Install latest `carousel-with-pagination-rn` :

**yarn**:
```
yarn add carousel-with-pagination-rn
```
**npm**:
```
npm install carousel-with-pagination-rn
```

## 🎮 Usage:

**Import the default component:** 
```javascript
import CustomCarousel from 'carousel-with-pagination-rn';
```

**Pass the required props `data` and  `renderItem`:**
```javascript
const YourScreen = () => {
    return(
        <CustomCarousel
          data={dummyCarousel}
          renderItem={({item}) => <YourItem item={item} />}
        />
    )
}
```
**Plug &  Play example:**
```javascript
import CustomCarousel from 'carousel-with-pagination-rn';

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

const {width} = Dimensions.get('screen');

const YourScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CustomCarousel
          data={dummyData}
          renderItem={({item}) => {
            return (
              <View style={styles.container}>
                <Image
                  source={{uri: item.img}}
                  style={styles.image}
                  resizeMode='contain'
                />

                <View style={styles.content}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                  <Text style={styles.extraDesc}>{item.price}</Text>
                </View>
              </View>
            );
          }}
        />
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
  extraDesc: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default YourScreen;

```

## 🥷 Properties:

<!-- | Prop | Usage | Default |
| ------ | ------ | ------- |
| **`data`** REQUIRED❗ | ️Used to pass in array of elements that should be rendere.  The same as data prop in FlatList component |N/A
| renderItem | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] | -->

| Prop           | Description | Default | Type |
| -------------- | ----------- | ------- | ---- |
| **`data`** ❗Required | Used to pass in array of elements that should be rendere.  The same as `data` prop in FlatList component | N/A | `Array<any>` |
| **`renderItem`** ❗Required | Takes an item from data props and renders it as required. The same as `renderItem` prop in FlatList component | N/A | `ListRenderItem<any>` |
| **`mainContainerStyle`** | Used to apply styling to the main container that wraps both: carousel and pagination | N/A | `StyleProp<ViewStyle>` |
| **`carouselContainerStyle`** | Equivalent to `style` prop in FlatList and has the same affect to the Carousel | N/A | `StyleProp<ViewStyle>` |
| **`carouselContentContainerStyle`** | Equivalent to `contentContainerStyle` prop in FlatList and has the same affect to the Carousel | N/A | `StyleProp<ViewStyle>` |
| **`paginationContainerStyle`** | Used to apply styling to the container that wraps the pagination | N/A | `StyleProp<ViewStyle>` |
| **`widthBoundaryForPagination`** | Is used to adjust inputRange of interpolated animations of pagination. Has to match to the `width` of `renderItem`. If not set, the device screen width will be used.| `Dimensions.get('window').width` | `number` |
| **`indicatorWidth`** | Is used to adjust dynamic width of each pagination indicator. Has to be an array of 3 numbers where the second element of array will be assigned to the height of the active indicator. Example: `indicatorWidth={[15,30,15]}`. If static width is required, pass an array of three equal numbers as: `[10,10,10]`  | `[20,40,20]` | `Array<number>` |
| **`indicatorHeight`** | Is used to adjust dynamic height of each pagination indicator. Has to be an array of 3 numbers where the second element of array will be assigned to the width of the active indicator. Example: `indicatorHeight={[15,30,15]}`. If static width is required, pass an array of three equal numbers as: `[10,10,10]`  | `[15,15,15]` | `Array<number>` |
| **`indicatorColor`** | Is used to adjust dynamic color of each pagination indicator. Has to be an array of 3 strings/colors where the second element of array will be assigned to color of the active indicator. Example: `indicatorColor={['grey', 'black', 'grey']}`. If static width is required, pass an array of three equal numbers as: `['grey', 'grey', 'grey']`  | `['grey', 'black', 'grey']` | `Array<string>` |
| **`inidicatorBorderRadius`** | Is used to adjust `borderRadius` of each pagination indicator | `5` | `number` |
| **`indicatorHorizontalPadding`** | Is used to adjust `horizontalPadding` of each pagination indicator | `10` | `number` |
| **`paginataionBackgroundColor`** | Is used to change `backgroundColor` of each pagination container | `transparent` | `string` |
| **`isEndReached`** | Will be called once the last element of the Carousel is displayed | `(endReached: boolean) => void` |

> ❗❗ It is important to pass a value to prop **`widthBoundaryForPagination`** if parent container within `renderItem` is not taking the full width of the screen. These values have to be the same.


## ⚙️ Methods attached to the Ref:

| Method         | Description | Type |
| -------------- | ----------- | ---- |
| **`ref`** | Can be used to access two methods: `showNextItem()` & `showPreviousItem()`. These methods then can be used to access behavior of the carousel and define it manually i.e. move to the next item in the carousel or move to the previous one. The Example below should provide a bit more information on the use and the implementation of these methods. |`RefProps` |

**Explanation of use:**
This feature was added in `v1.1.5` following a feature request on the GitHub repository. 
Now you can access the `ref` for CustomCarousel component, assign it as custom ref within your component using `useRef` and trigger two methods: `showNextItem()` AND `showPreviousItem()` to scroll trhough the Carousel using your custom component ( arrows as an example ).

**Showcase:**

<p>
  <kbd>
    <img
      src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZThjZWY5MDBlYTZlODVlZDIwYzEwN2M0NDQ1OGU5ZjVmNzczZWQ5MyZjdD1n/3n7Y3mZzP5su1TyxUa/giphy.gif"
      title="Arrows"
      float="left"
    >
  </kbd>
  <kbd>
    <img
      src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDE5MWE1NDhhYzc5NzVkM2Q2MGRmMjE3NDJiOGE2OGNjMDI0ZjI1OCZjdD1n/vCHDyihVKGCDfYz8xg/giphy.gif"
      title="Text"
      float="left"
    >
  </kbd>
  <br>
  <em>Use if Ref methods with custom components that can be positioned anywhere.</em>
</p>


**Example:**

```javascript
const CarouselScreen = () => {
  let carouselRef = useRef<RefProps>(null); //RefProps interface can be imported from the library

  const handleNextClick = () => {
    carouselRef.current?.showNextItem(); //will scroll to the next item in carousel
  };
  const handlePreviousClick = () => {
    carouselRef.current?.showPreviousItem(); //will scroll to the previous item in carousel
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CustomCarousel
          ref={carouselRef} //access and assign the reference for the further use and manipulation
          data={dummyData}
          renderItem={renderItem} //Copy the renderItem from the 'Plug&Play' example or use your own renderItem.
          disablePagination={true} //used to hide the pagination of the carousel
        />
        <View
          style={{
            flexDirection: 'row',
            width: 100,
            justifyContent: 'space-between',
          }}
        >
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
```




## 🪪 License & Sources:
* carousel-with-pagination-rn - MIT © [veryrare104](https://github.com/dvijeniii05)
* images used in **Plug & Play** example source - [Lorem Picsum](https://picsum.photos/)
* giphs created and sourced - [GIPHY](https://giphy.com/) 










