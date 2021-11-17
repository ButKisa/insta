/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {View, TouchableOpacity, Image, ScrollView} from 'react-native';
import {style} from './NewsStyle';
import { PostSlider } from '../../components/posts/PostSlider/PostSlider';
import { PostPhotoOne } from '../../components/posts/PostPhotoOne/PostPhotoOne';
import { PostPhotoTwo } from '../../components/posts/PostPhotoTwo/PostPhotoTwo';


export const News = ({navigation}) => {
  return (
    <View style={style.blockNews}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <PostSlider />
            <PostPhotoOne />
            <PostPhotoTwo />
        </ScrollView>
    </View>
  );
};
