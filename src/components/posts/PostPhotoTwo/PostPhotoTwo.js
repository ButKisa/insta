/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import {style} from './postStyle';
import { Line } from '../../ui-kit/Line';
import avatar from '../../../assets/photo/avatar.jpg';
import Icon from '../../Icons';
import photoSlider5 from '../../../assets/photo/photoSlider5.jpg';
import { useNavigation } from '@react-navigation/native';


export const PostPhotoTwo = () => {
    const navigation = useNavigation();
    return (
        <View style={style.post}>
            <View style={style.postTop}>
                <View style={style.postHeader}>
                    <View style={style.postHeaderLeft}>
                        <TouchableOpacity>
                                <Image style={style.avatar} source={avatar} />
                        </TouchableOpacity>
                        <View>
                            <TouchableOpacity>
                                <Text style={style.textName}>Kat Williams</Text>
                            </TouchableOpacity>
                            <Text style={style.textTime}>1h ago</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Icon name={'IconDotsUp'}  color={'#8672BB'}  size={18}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={style.postInfo}>
                <TouchableOpacity>
                    <Image source={photoSlider5} style={style.postphoto} />
                </ TouchableOpacity>
            </View>
            <View style={style.postLike}>
                <View style={style.postLikeLeft}>
                    <View style={style.postLikeLeftItem}>
                        <TouchableOpacity style={style.postLikeIndent}>
                            <Icon name={'IconLike'}  color={'white'}  size={18}/>
                            <Text style={style.textLike}>8,998</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.postLikeLeftItem}>
                        <TouchableOpacity style={style.postLikeIndent} onPress ={() => navigation.navigate('NewsComments')}>
                            <Icon name={'IconMessage'}  color={'white'}  size={18}/>
                            <Text style={style.textLike}>145</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={style.postLikeLeftItemFlag}>
                    <Icon name={'IconFlag'}  color={'white'}  size={18}/>
                </TouchableOpacity>
            </View>
            <Line style={style.line}/>
        </ View>
    );
};
