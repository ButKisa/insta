/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import {DataHelper} from '../../../helpers/DataHelper';
import notPhoto from '../../../assets/photo/notPhoto.jpg'



export const PhotoList = props => {
  // useEffect(() => {
  //   getPhoto();
  //   console.log('фото',props);
  // }, []);
  const url = `https://api.vk.com/method/photos.get?&album_id=wall&access_token=22f779c13047739c24e04e5cc52fa54023e72a2f41024de2cfaf579c93a4e238d75205a77e84e9a8ff237&&v=5.131`;
  const getPhoto = () => {
      return fetch(url)
      .then((response) => response.json())
      .then(json => props.getPhotoUser(json))
  };
  const {onClose} = props;
  return (
    <View>
      <TouchableOpacity onPress={() => getPhoto()}>
        <Text style={styles.textInfoTop}>Вывести фото</Text>
      </TouchableOpacity>
      {/* <ScrollView style={styles.scrollContainer}>
        <View style={styles.centerContainer}>
          {DATA.map((item, index) => (
            <View key={index}>
              <TouchableOpacity onPress={onClose}>
                <Image style={styles.smallImage} source={item.source} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView> */}
        {props.photo.photo.count > 0 ?(
        <View>
          {props.photo.photo.items.map(items =>(
            items.sizes.map(items =>(
              <ScrollView style={styles.scrollContainer}>
                <View style={styles.centerContainer}>
                  <TouchableOpacity>
                    <Image style={styles.smallImage} source={{uri: items.url}} />
                  </TouchableOpacity>
                </View>
              </ScrollView>
            ))
          ))}
          </View>  
        ):(<Text style={styles.textInfoTop}>У вас пока нет фотографий</Text>)}
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    height: DataHelper.getWidth() * 0.80,
    flexDirection: 'row',
  },
  smallImage: {
    width: DataHelper.getWidth() * 0.3,
    height: DataHelper.getWidth() * 0.3,
    marginTop: DataHelper.getWidth() * 0.009,
    marginLeft: DataHelper.getWidth() * 0.009,
  },
  centerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    flexWrap: 'wrap',
  },
  scrollContainer1: {
    flexDirection: 'row',
  },
  textInfoTop: {
    fontSize: 14, 
    fontWeight: '500',
    color: '#8672BB',
  },
});
