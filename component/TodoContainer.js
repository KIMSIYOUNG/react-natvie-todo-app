import React from 'react';
import { FlatList, SafeAreaView, Switch, Text, TextInput, View } from 'react-native';
import { STYLE, TODO_CONTAINER } from './Styles';

const TodoContainer = ({ toggleSwitch, todo, updateItem }) => {
  const { itemStyle, content } = TODO_CONTAINER;
  const { todoContainer } = STYLE;

  const createCount = () => {
    return todo.length;
  }

  const renderItem = ({ item }) => {
    console.log(item.text + item.isDone);
    return (
      <View style={itemStyle}>
        <Switch
          ios_backgroundColor="#fff"
          onValueChange={(value) => toggleSwitch(item.id, value)}
          value={item.isDone}
        />
        <TextInput onChangeText={text => updateItem(item.id, text, item.isDone)}
                   style={content}>{item.text}</TextInput>
      </View>
    )
  };

  return (
    <View style={todoContainer}>
      <Text style={{marginBottom:15,textAlign:'center', color:"#F2F2F2"}}>count : {createCount()}</Text>
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