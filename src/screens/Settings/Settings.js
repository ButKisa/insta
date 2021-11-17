/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {style} from './SettingsStyles';
import Icon from '../../components/Icons';



export const Settings = ({navigation}) => {
  return (
    <View style={style.settingsBlock}>
       <View style={style.settingsHeader} >
          <TouchableOpacity onPress ={() => navigation.navigate('DrawerScren')}>
            <Icon name="IconArrowLeft" size={18} color="white" />
          </TouchableOpacity>
          <View style={style.settingsTextCenter} >
            <Text style={style.settingsText}>Настройки</Text>
          </View>
        </View>
       <View style={style.settingsButtons}>
          <TouchableOpacity style={style.settingsButton}>
            <Icon name="IconCards" size={18} color="white" />
            <Text style={style.settingsText}>Внешний вид</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.settingsButton}>
            <Icon name="IconInfo" size={18} color="white" />
            <Text style={style.settingsText}>О приложении</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.settingsButton}>
            <Icon name="IconOutput" size={18} color="#8672BB" />
            <Text style={style.settingsTextExit}>Выйти</Text>
          </TouchableOpacity>
       </View>
    </View>
  );
};
