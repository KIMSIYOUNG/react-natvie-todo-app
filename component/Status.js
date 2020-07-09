import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { STYLE } from './Styles';
import { DONE, EVERY, WILL } from './Const';

const Status = ({ filter }) => {
  const { processText, processStatus } = STYLE;

  return (
    <View style={processStatus}>
      <TouchableOpacity style={processText} onPress={() => filter(EVERY)} title='EVERY'>
        <Text style={processText}>EVERY</Text>
      </TouchableOpacity>
      <TouchableOpacity style={processText} onPress={() => filter(WILL)} title='WILL'>
        <Text style={processText}>WILL</Text>
      </TouchableOpacity>
      <TouchableOpacity style={processText} onPress={() => filter(DONE)} title='DONE'>
        <Text style={processText}>DONE</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Status;