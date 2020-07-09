import React, { useState } from 'react';
import { STYLE } from './Styles';
import { View, TextInput, Button } from 'react-native';

const Input = ({ register, inputChange, input }) => {
  const { inputContainer, inputText } = STYLE;

  return (
    <View style={inputContainer}>
      <TextInput
        style={inputText}
        onChangeText={inputChange}
        value={input}
        onSubmitEditing={() => register(input)}
      />
    </View>
  )
}


export default Input;