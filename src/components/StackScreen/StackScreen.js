import React from 'react';
import Profile from '../../screens/ProfileHome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {News} from '../../screens/News/News';
import FrendsList from '../../screens/FrendsList';
import {NewsComments} from '../../screens/NewsComments/NewsComments';
import Search from '../../screens/Search';
import { Settings } from '../../screens/Settings/Settings';
import DrawerScren from '../DrawerScren/DrawerScren';

const Stack = createNativeStackNavigator();

export const StackScreen = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="DrawerScren" component={DrawerScren}   options={{headerShown: false}}/>
            <Stack.Screen name="News" component={News}   options={{headerShown: false}}/>
            <Stack.Screen name="Search" component={Search}   options={{headerShown: false}}/>


            <Stack.Screen name="Profile" component={Profile}   options={{headerShown: false}}/>


            <Stack.Screen name="FrendsList" component={FrendsList}   options={{headerShown: false}}/>
            <Stack.Screen name="NewsComments" component={NewsComments}   options={{headerShown: false}}/>
            <Stack.Screen name="Settings" component={Settings}   options={{headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
    );
  };

export default StackScreen



