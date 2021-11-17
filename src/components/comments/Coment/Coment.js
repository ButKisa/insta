/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {style} from './ComentStyle';
import Icon from '../../../components/Icons';
import avatar from '../../../assets/photo/avatar.jpg';



export const Coment = ({navigation}) => {
  return (
        <View style={style.comments}>
            <TouchableOpacity>
                <Image style={style.avatar} source={avatar} />
            </TouchableOpacity>
            <View style={style.textBlock}>
                <TouchableOpacity>
                    <Text style={style.textBlockName}>Kat Williams</Text>
                </TouchableOpacity >
                <TouchableOpacity style={style.blockLike}>
                    <Icon name="IconLike" size={12} color="white" style={style.icon}/>
                    <Text style={style.textBlockLike}>57</Text>
                </TouchableOpacity>
                <View style={style.ra}>
                    <Text style={style.textBlockComment}>User experience design for the Web (and its siblings, interaction design, User experience design for the Web (and its siblings, interaction design, UI design, et al) has traditionally been a deliverables-based practice. UI design, et al) has traditionally been a deliverables-based practice. </Text>
                </View>
                <View style={style.answer}>
                    <Text style={style.textBlockData}>25 сен. в 22:12 г</Text>
                    <TouchableOpacity >
                    <Text style={style.textBlockAnswer}>Ответить</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

  );
};
