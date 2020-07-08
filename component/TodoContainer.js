import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Switch, Text, View, } from 'react-native';
import { STYLE, TODO_CONTAINER } from './Styles';

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "fin bug",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },

];

const TodoContainer = () => {
  const { item, content } = TODO_CONTAINER;
  const { todoContainer } = STYLE;

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const renderItem = ({ item }) => (
    <Item title={item.title}/>
  );

  const Item = ({ title }) => (
    <View style={item}>
      <Switch
        ios_backgroundColor="#fff"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={content}>{title}</Text>
    </View>
  );

  return (
    <View style={todoContainer}>
      <SafeAreaView>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  )
}

export default TodoContainer;