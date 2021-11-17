/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import {style} from './FrendsListStyles';
import Icon from '../../components/Icons';
import { useDispatch, useSelector} from 'react-redux';
import { fetchFriends } from '../../store/actions/searchFriendsActions';



export const FrendsList = props => {
  const url = `https://api.vk.com/method/friends.search?&fields=photo_100,photo_50,city&access_token=22f779c13047739c24e04e5cc52fa54023e72a2f41024de2cfaf579c93a4e238d75205a77e84e9a8ff237&&v=5.131`;
  const fetchFriends = () => {
    return fetch(url)
    .then((response) => response.json())
    .then(json => props.searchFriends(json))
  };
  return (
    <View style={style.settingsBlock}>
       <View style={style.settingsHeader} >
          <TouchableOpacity onPress ={() => props.navigation.navigate('DrawerScren')}>
            <Icon name="IconArrowLeft" size={18} color="white" />
          </TouchableOpacity>
          <View style={style.settingsTextCenter} >
            <Text style={style.settingsText}>Друзья</Text>
          </View>
        </View>
        <ScrollView style={style.scroll}>
             <TouchableOpacity onPress={() => fetchFriends()}>
               <Text style={style.text}>Вывести список друзей</Text>
             </TouchableOpacity>
            {props.friends.friends.length > 0 ?(
            <View>
              {props.friends.friends.map(items =>(
                  <View style={style.block}>
                    <TouchableOpacity style={style.person}>
                          <Image style={style.avatar} source={{uri: items.photo_100}} />
                          <View style={style.textBlock}>
                            <Text style={style.textBlockName}>{items.first_name}{' '}{items.last_name}</Text>                  
                            {items.city ? (<Text style={style.textBlockInfo}>{items.city.title}</Text>): (<Text></Text>)}
                          </View>
                    </TouchableOpacity>                
                 </View>
              ))} 
            </View>
          ):(
            <View style={style.textNoneFriends}>
              <Text style={style.text}>У вас пока нет друзей</Text>
            </View>
          )}
        </ScrollView> 
    </View>
  );
};
