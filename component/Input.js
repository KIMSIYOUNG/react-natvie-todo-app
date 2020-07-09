import React, { useState } from 'react';
import { STYLE } from './Styles';
import { View, TextInput, Button } from 'react-native';

const Input = ({ register, inputChange, input }) => {
  const { inputContainer } = STYLE;

  return (
    <View style={inputContainer}>
      <TextInput
        style={{
          height: 40,
          borderColor: '#F2F2F2',
          borderWidth: 1,
          borderRadius: 100,
          marginHorizontal: 45,
          textAlign: "center",
          color: "#F2F2F2"
        }}
        onChangeText={inputChange}
        value={input}
        onSubmitEditing={() => register(input)}
      />
    </View>
  )
}


export default Input;