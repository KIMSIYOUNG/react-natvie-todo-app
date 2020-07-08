import React, {useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { BACKGROUND_COLOR, STYLE } from './component/Styles';
import Nav from './component/Nav';
import Status from './component/Status';
import Input from './component/Input';
import TodoContainer from './component/TodoContainer';


const App = () => {
  const { input, setInput } = useState("Input what you are doing")
  const { middle, start, end } = BACKGROUND_COLOR;

  const inputChange = (data) => {
    setInput(data);
  }

  return (
    <LinearGradient style={STYLE.container} colors={[start.color, middle.color, end.color]}>

      <Nav/>
      <Status/>
      <Input/>
      <TodoContainer/>

    </LinearGradient>
  )
};

export default App


