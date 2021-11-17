/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import avatar from '../../assets/photo/avatar.jpg';
import {style} from './DrawerContentStyles';
import Icon from '../../components/Icons';
import {DrawerContentScrollView} from '@react-navigation/drawer';

export function DrawerContent(props) {
  return (
    <DrawerContentScrollView style={style.newsDriver}>

      <View style={style.topBlock}>
        <View>
          <TouchableOpacity onPress={()=> {props.navigation.navigate('Profile');}}>
            <Image source={avatar} style={style.avatar} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={style.topBlockTextName}>Kat Williams</Text>
          <TouchableOpacity onPress={()=> {props.navigation.navigate('Profile');}}>
            <Text style={style.topBlockTextAddress}>@Williams</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.newsButtons}>
        <TouchableOpacity style={style.newsButton} onPress={()=> {props.navigation.navigate('Profile'); {console.log(props);}}}>
          <Icon name={'IconPerson'}  color={'white'}  size={18}/>
          <Text style={style.newsButtonText}>Мой профиль</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.newsButton} onPress={()=> {props.navigation.navigate('FrendsList');}}>
          <Icon name={'IconGroup'}  color={'white'}  size={18}/>
          <Text style={style.newsButtonText}>Друзья</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.newsButton} onPress={()=> {props.navigation.navigate('Search');}}>
          <Icon name={'IconMoreDetails'}  color={'white'}  size={18}/>
          <Text style={style.newsButtonText}>Поиск</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.newsButton} onPress={()=> {props.navigation.navigate('Settings');}}>
          <Icon name={'IconSettings'}  color={'white'}  size={18}/>
          <Text style={style.newsButtonText}>Настройки</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}
