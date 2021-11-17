/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, TouchableOpacity, Modal} from 'react-native';
import {style} from './ProfileMenuModalStyles';
import {Line} from '../../ui-kit/Line';
import Icon from '../../Icons';

export const ProfileMenuModal = props => {
  const {visible, onClose} = props;
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      style={style.modalButton}>
      <View style={style.modalButtonContainrer}>
        <View style={style.modalInfoTop}>
          <View style={style.modalInfo}>
            <Text style={style.textBold}>Подробнее</Text>
            <TouchableOpacity style={style.closeModal} onPress={onClose}>
              <Icon name={'IconClose'} color={'#8672BB'} size={10} />
            </TouchableOpacity>
          </View>
          <View style={style.modalInfo}>
            <Icon name={'IconMessage'} color={'white'} size={18} />
            <Text style={style.textThin}>
              They never ask people to do things they wouldn’t do themselves.
            </Text>
          </View>
          <View style={style.modalInfo}>
            <Icon name={'IconHoliday'} color={'white'} size={18} />
            <Text style={style.textThin}>День рождения: 08 октября 1992</Text>
          </View>
          <View style={style.modalInfo}>
            <Icon name={'IconLocationMarker'} color={'white'} size={18} />
            <Text style={style.textThin}>Город: Санкт-Петербург</Text>
          </View>
          <View style={style.modalInfo}>
            <Icon name={'IconWork'} color={'white'} size={18} />
            <Text style={style.textThin}>ВГУЮ в г. Санкт-Петербург</Text>
          </View>
        </View>
        <Line style={style.line} />
        <View style={style.modalInfoBottom}>
          <Text style={style.textBold}>Контакты</Text>
          <View style={style.modalInfo}>
            <TouchableOpacity style={style.modalInfo}>
              <Icon name={'IconarrowUp'} color={'white'} size={18} />
              <Text style={style.textThin}>http://t.me/durov</Text>
            </TouchableOpacity>
          </View>
          <View style={style.modalInfo}>
            <TouchableOpacity style={style.modalInfo}>
              <Icon name={'IconTwitter'} color={'white'} size={18} />
              <Text style={style.textThin}>Durov</Text>
            </TouchableOpacity>
          </View>
          <View style={style.modalInfo}>
            <TouchableOpacity style={style.modalInfo}>
              <Icon name={'IconInstagram'} color={'white'} size={18} />
              <Text style={style.textThin}>Pavel Durov</Text>
            </TouchableOpacity>
          </View>
          <View style={style.modalInfo}>
            <TouchableOpacity style={style.modalInfo}>
              <Icon name={'IconFacebook'} color={'white'} size={18} />
              <Text style={style.textThin}>durov</Text>
            </TouchableOpacity>
          </View>
          <View style={style.modalInfo}>
            <TouchableOpacity style={style.modalInfo}>
              <Icon name={'IconTelegram'} color={'white'} size={18} />
              <Text style={style.textThin}>durov</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
