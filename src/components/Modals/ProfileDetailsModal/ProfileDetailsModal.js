/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Modal} from 'react-native';
import {style} from './ProfileDetailsModalStyles';
import {Line} from '../../ui-kit/Line';
import Icon from '../../Icons';

export const ProfileDetailsModal = props => {
  const {visible, onClose} = props;
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      style={style.modalButton}>
      <View style={style.menuContainer}>
        <View style={style.menuContainerTop}>
          <View style={style.menuButtonOne}>
            <TouchableOpacity style={style.menuContainerButton}>
              <Icon name={'IconCircles'}  color={'white'}  size={18}/>
              <Text style={style.textThin}>Поделиться</Text>
            </TouchableOpacity>
          </View>
          <Line />
          <View style={style.menuButtonOne}>
            <TouchableOpacity style={style.menuContainerButton}>
              <Icon name={'IconFiles'}  color={'white'}  size={18}/>
              <Text style={style.textThin}>Скопировать ссылку</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.menuContainerBottomButton}>
          <View>
            <TouchableOpacity
              style={style.menuContainerButtonCenter}
              onPress={onClose}>
              <Text style={style.textBold}>Отмена</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
