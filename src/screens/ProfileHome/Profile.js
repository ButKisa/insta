import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import PhotoList from '../../components/ui-kit/PhotoList';
import {MessengerButtonDetails} from '../../components/ui-kit/buttons/MessengerButton/MessengerButtonDetails';
import {ProfileDetailsModal} from '../../components/Modals/ProfileDetailsModal/ProfileDetailsModal';
import {ProfileMenuModal} from '../../components/Modals/ProfileMenuModal/ProfileMenuModal';
import {style} from './ProfileStyles';
import {Line} from '../../components/ui-kit/Line';
import Icon from '../../components/Icons';
import notPhoto from '../../assets/photo/notPhoto.jpg';

export const Profile = props => {
  useEffect(() => {
    getInfo();
    console.log(123);
  }, []);
  const url = `https://api.vk.com/method/users.get?&fields=photo_100,city,education,photo_200&access_token=22f779c13047739c24e04e5cc52fa54023e72a2f41024de2cfaf579c93a4e238d75205a77e84e9a8ff237&&v=5.131`;
  const getInfo = async () => {
    const response = await fetch(url);
    const json = await response.json();
    return props.getInfoPerson(json);
  };
  const [modalWindowMenu, setModalWindowMenu] = useState(false);
  const [modalWindowDetals, setModalWindowDetals] = useState(false);
  // console.log('hii',props.person.person[0].id)

  const onCloseMoalMenu = () => {
    setModalWindowMenu(false);
  };
  const onCloseModalDetals = () => {
    setModalWindowDetals(false);
  };
  const onOpenPhoto = () => {
    setModalWindowDetals(true);
  };

  return (
    <View>
      <ProfileDetailsModal
        visible={modalWindowDetals}
      />
      <ProfileMenuModal visible={modalWindowMenu} onClose={onCloseMoalMenu} />
      <View style={style.profileColor}>
        <View style={style.profileMenu}>
          <TouchableOpacity onPress ={() => props.navigation.navigate('DrawerScren')}>
            <Icon name={'IconArrowLeft'}  color={'white'}  size={18}/>
          </TouchableOpacity>
          {/* <TouchableOpacity  onPress={() => getInfo()}> 
            <Icon name={'IconArrowLeft'}  color={'white'}  size={18}/>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={style.pointsTop}
            onPress={() => setModalWindowDetals(true)}>
              <Icon name={'IconDots'}  color={'white'}  size={18}/>
          </TouchableOpacity>
        </View>
        <View style={style.profileContainer}>
          <View style={style.nameInfo}>
            {props.person.person[0].id > 0 ?(<Image style={style.avatar} source={{uri: props.person.person[0].photo_100}} />):(<Image source={notPhoto} style={style.avatar} />)}
            {props.person.person[0].id > 0 ?(<Text style={style.textBold}>{props.person.person[0].first_name}</Text>):(<Text style={style.textBold}>First name</Text>)}
            {props.person.person[0].id > 0 ?(<Text style={style.textThin}>{props.person.person[0].last_name}</Text>):(<Text style={style.textBold}>Last name</Text>)}
          </View>
          <View style={style.infoBox}>
          {props.person.person[0].id > 0 ?(<Text style={style.textInfoTop}>{props.person.person[0].city.title}</Text>):(<Text style={style.textBold}>City</Text>)}
          {props.person.person[0].id > 0 ?(<Text style={style.textInfoBottom}>Вуз: {props.person.person[0].university_name}</Text>):(<Text style={style.textBold}>University</Text>)}
          </View>
        </View>
        <View style={style.dopInfo}>
          <View>
            <Text style={style.textBoldDop}>120</Text>
            <Text style={style.textInfoDop}>Followers</Text>
          </View>
          <View>
            <Text style={style.textBoldDop}>19</Text>
            <Text style={style.textInfoDop}>Following</Text>
          </View>
          <TouchableOpacity onPress={() => setModalWindowMenu(true)}>
            <MessengerButtonDetails />
          </TouchableOpacity>
        </View>
        <Line />
        <View style={style.infoPhoto}>
          <Text style={style.textPhoto}>Фотографии </Text>
          
        </View>
        <PhotoList onClose={onOpenPhoto} />
      </View>
    </View>
  );
};

