import React from 'react';
import WeatherApp from './component/weather/WeatherApp';
import TodoApp from './component/todo/TodoApp';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="todos" component={TodoApp}/>
        <Tab.Screen name="weather" component={WeatherApp}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
};

export default App


