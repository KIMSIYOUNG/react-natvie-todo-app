import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>
      <Text style={styles.text}>Getting the fucking weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent:"flex-end",
    paddingHorizontal:30,
    paddingVertical:100,
    backgroundColor:"#FDF404",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30,
  }
})

export default Loading;