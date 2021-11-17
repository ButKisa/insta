import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from '../../components/Icons';
import {News} from '../../screens/News/News';
import { createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from '../../screens/DrawerContent/DrawerContent';
import {style} from './DrawerScrenStyle';

const Drawer = createDrawerNavigator();

function DrawerScren({navigation}) {

  return (
      <Drawer.Navigator drawerContent={props => <DrawerContent { ... props} />}>
        <Drawer.Screen
          name="News"
          component={News}
          options={{
            title: '',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#2B2146',
              elevation: 0,
              shadowOpacity: 0,
              
            },
            headerRight: () => (
            <View style={style.rightIcon}>
              <Icon name={'IconMoreDetails'}  color={'white'}  size={18} onPress ={() => navigation.navigate('Search')}/>
              <Icon name={'IconBell'}  color={'white'}  size={18} onPress ={() => navigation.navigate('Settings')}/>
            </View>
            ),
          }}
          
        />
      </Drawer.Navigator>
  );
};

export default DrawerScren


