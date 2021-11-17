/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import photoSlider1 from '../assets/photo/photoSlider1.jpg';
import photoSlider2 from '../assets/photo/photoSlider2.jpg';
import photoSlider3 from '../assets/photo/photoSlider3.jpg';


const images = [
  {source: photoSlider1, name: 'photo1'},
  {source: photoSlider2, name: 'photo2'},
  {source: photoSlider3, name: 'photo3'},
];

export const Slider = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, unState] = useState(false);

//   change = ({nativeEvent}) => {
//       const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
//       if(slide !== this.state.active){
//           this.setState({active: slide});
//       }
//     }
  return (
    <View style={styles.container}>
      <ScrollView
        pagingEnabled
        horizontal
        // onScroll={this.container}
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}>
        {images.map((image, index) => (
          <Image key={index} source={image.source} style={styles.image} />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((i, k) => (
          <Text key={k} style={state ? styles.activeText : styles.text}>
            ●
          </Text>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
     resizeMode: 'contain',
     width: 330,
     borderRadius: 16,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
    width: 38,
    justifyContent: 'space-between',
    marginTop: 200,

  },
  container: {
    height: 200,
    },
  scroll: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: -70,
  },
  text: {
    color: '#8672BB',
  },
  activeText: {
    color: 'red',
  },
});
