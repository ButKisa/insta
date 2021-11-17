/* eslint-disable prettier/prettier */
import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import {style} from './MessengerButtonDetailsStyles';

export const MessengerButtonDetails = () => {
  return (
    <View style={style.ButtomContainer}>
      <Text style={style.ButtomText}>Подробнее</Text>
    </View>
  );
};
