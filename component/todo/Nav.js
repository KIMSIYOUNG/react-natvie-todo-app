import React from 'react';
import { STYLE } from './Styles';
import { StatusBar, Text, View } from 'react-native';
import AppStatusBar from '../AppStatusBar';

const Nav = () => {
  const { nav, navText } = STYLE;

  return (
    <View style={nav}>
      <AppStatusBar/>
      <Text style={navText}>Todo app</Text>
    </View>
  )
}
export default Nav;