/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {style} from './NewsCommentsStyle';
import Icon from '../../components/Icons';
import {PostSlider} from '../../components/posts/PostSlider/PostSlider';
import {Line} from '../../components/ui-kit/Line';
import {Coment} from '../../components/comments/Coment/Coment';
import {Answer} from '../../components/comments/Answer/Answer';

export const NewsComments = ({navigation}) => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={style.settingsBlock}>
      <ScrollView style={style.settingsScroll}>
        <View style={style.settingsHeader}>
          <TouchableOpacity onPress={() => navigation.navigate('DrawerScren')}>
            <Icon name="IconArrowLeft" size={18} color="white" />
          </TouchableOpacity>
          <View style={style.settingsTextCenter}>
            <Text style={style.settingsText}>Запись</Text>
          </View>
        </View>
        <PostSlider />
        <View style={style.settingsScroll}>
          <Text style={style.textBlockComments}>4 Комментария</Text>
          <Line style={style.line} />
          <Coment />
          <Answer />
          <Coment />
          <Answer />
        </View>
      </ScrollView>
      <View style={style.inputIcon}>
        <TextInput
          style={style.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Комментарий"
          placeholderTextColor={'#8672BB'}
        />
        <TouchableOpacity>
          <Icon
            name={'IconAirplane'}
            color={'white'}
            size={17}
            style={style.iconAirplane}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
