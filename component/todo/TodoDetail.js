import React from 'react';
import { Button, Text, View } from 'react-native';

const TodoDetail = ({navigation}) => {

  return (
    <View>
      <Text>⭐ Hi! this is todo detail here ⭐</Text>
      <Button title={"Go back"} onPress={() => navigation.goBack()}/>
      <Button title={"Go hello"} onPress={() => navigation.navigate("hello")}/>
    </View>
  )
}

export default TodoDetail;