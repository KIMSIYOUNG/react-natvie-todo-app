import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { STYLE, TODO_CONTAINER } from './Styles';

const TodoContainer = ({ toggleSwitch, todo, updateItem }) => {
  const { itemStyle, content, count } = TODO_CONTAINER;
  const { todoContainer } = STYLE;

  const createCount = () => {
    return todo.length;
  }

  const renderItem = ({ item }) => {
    return (
      <View style={itemStyle}>
        <Switch
          onValueChange={() => toggleSwitch(item.id)}
          value={item.isDone}
        />
        <TextInput onChangeText={text => updateItem(item.id, text, item.isDone)}
                   style={content}>{item.text}
        </TextInput>
      </View>
    )
  };

  return (
    <View style={todoContainer}>
      <Text style={count}>count : {createCount()}</Text>
      <SafeAreaView>
        <FlatList
          data={todo}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  )
}

export default TodoContainer;