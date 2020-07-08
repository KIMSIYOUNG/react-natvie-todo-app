import React, { useState } from 'react';
import { STYLE } from './Styles';
import { View, TextInput, Button } from 'react-native';

const Input = () => {
  const { inputContainer } = STYLE;
  const [input, setInput] = useState('Input what you will do');
  const [nextId, setNextId] = useState(3);
  const [todo, setTodo] = useState([
    {id : 1, text : "Hi I'm greet to meet you !"},
    {id : 2, text : "Let's get Started to make your to do!"}
  ])

  const register = (input) => {
    const newTodo = {
      id : nextId,
      text : input
    };
    setNextId(nextId + 1);
    setInput("");
    setTodo(todo.concat(newTodo));
  }

  return (
    <View style={inputContainer}>
      <TextInput
        style={{ height: 40, borderColor: '#F2F2F2', borderWidth: 1, borderRadius:100, marginHorizontal:45, textAlign:"center", color:"#F2F2F2"}}
        onChangeText={input => setInput(input)}
        value={input}
        onSubmitEditing={() => register(input)}
      />
    </View>
  )
}


export default Input;