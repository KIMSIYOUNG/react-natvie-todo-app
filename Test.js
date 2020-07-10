import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import TodoDetail from './component/todo/TodoDetail';
import { Button, Text, View } from 'react-native';

const hello = ({ navigation }) => {
  return (
    <View>
      <Text>Hello world ! </Text>
      <Button title={'Go back'} onPress={() => navigation.goBack()}/>
      <Button title={'Go to Hello'} onPress={() => navigation.navigate('hello')}/>
    </View>
  )
}

const Test = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="TEST">
      <Stack.Screen name="todo" component={TodoDetail}/>
      <Stack.Screen name="hello" component={hello}/>
    </Stack.Navigator>
  )
};

export default Test;
