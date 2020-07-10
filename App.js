import React from 'react';
import WeatherApp from './component/weather/WeatherApp';
import TodoApp from './component/todo/TodoApp';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Test from './Test';

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="todos" component={TodoApp}/>
        <Tab.Screen name="weather" component={WeatherApp}/>
        <Tab.Screen name="test" component={Test}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
};

export default App


