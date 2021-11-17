import React, { Component } from 'react';
import {StackScreen} from './src/components/StackScreen/StackScreen';
import { useDispatch, useSelector} from 'react-redux';
import { View, Text } from 'react-native';

 export default class App extends Component{

  render(){
  return (
    <StackScreen/>
  );
  }
};




