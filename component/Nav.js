import React from 'react';
import { STYLE } from './Styles';
import { StatusBar, Text, View } from 'react-native';

const Nav = () => {
  const { nav, navText } = STYLE;

  return (
    <View style={nav}>
      <StatusBar barStyle={'light-content'}/>
      <Text style={navText}>Todo app</Text>
      <StatusBar style="auto"/>
    </View>
  )
}
export default Nav;