import React from 'react';
import { Text, View } from 'react-native';
import { STYLE } from './Styles';

const Status = () => {
  const { processText, processStatus } = STYLE;

  return (
    <View style={processStatus}>
      <Text style={processText}>Every</Text>
      <Text style={processText}>Will do</Text>
      <Text style={processText}>Done</Text>
    </View>
  )
}

export default Status;