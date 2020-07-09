import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { BACKGROUND_COLOR, STYLE } from './component/todo/Styles';
import Nav from './component/todo/Nav';
import Status from './component/todo/Status';
import Input from './component/todo/Input';
import TodoContainer from './component/todo/TodoContainer';
import { DONE, EVERY, WILL } from './component/todo/Const';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const App = () => {
  const { middle, start, end } = BACKGROUND_COLOR;

  const [input, setInput] = useState("Input what you are doing")
  const [update, setUpdate] = useState("");
  const [nextId, setNextId] = useState(4);
  const [todo, setTodo] = useState([
    { id: 1, text: "Hi I'm greet to meet you !", isDone: WILL },
    { id: 2, text: "Let's get Started to make your to do!", isDone: WILL },
    { id: 3, text: "Swipe what you did like this one haha :) ", isDone: DONE },
  ])
  const [filtered, setFiltered] = useState(todo);

  const inputChange = (data) => {
    setInput(data);
  }

  const changeFilteredTodo = (item) => {
    setFiltered(item)
  }

  const changeItem = (id, text, isDone) => {
    setUpdate(text);
    const changedTodo = todo.map(item => item.id === id ?
      item = {
        id: id,
        text: update,
        isDone: isDone,
      } : item);
    setTodo(changedTodo);
  }

  const toggleSwitch = (id) => {
    changeTodoStatus(id)
  }

  const reverseStatus = (status) => {
    if (status === WILL) {
      return DONE;
    } else if (status === DONE) {
      return WILL;
    }
  }

  const changeTodoStatus = (id) => {
    const changedTodo = todo.map(item => item.id === id ? {
      ...item,
      isDone: reverseStatus(item.isDone)
    } : item);
    setTodo(changedTodo);
    setFiltered(changedTodo);
  }

  const register = (input) => {
    const newTodo = {
      id: nextId,
      text: input,
      isDone: WILL,
    };
    setNextId(nextId + 1);
    setInput("Input what you are doing");
    setTodo(todo.concat(newTodo));

    if (filtered[0].isDone !== DONE) {
      setFiltered(filtered.concat(newTodo));
    }
  }

  const filterTodoStatus = (status) => {
    if (status === EVERY) {
      changeFilteredTodo(todo);
    } else if (status === WILL) {
      changeFilteredTodo(todo.filter(item => item.isDone === false));
    } else if (status === DONE) {
      changeFilteredTodo(todo.filter(item => item.isDone === true));
    }
  }

  function HomeStackScreen() {
    return (
      <View>
        <Text style={{ textAlign: 'center', marginTop: 300 }}>Home Screen</Text>
      </View>
    );
  }

  function SettingsStackScreen() {
    return (
      <View>
        <Text style={{ textAlign: 'center', marginTop: 300 }}>Settings Screen</Text>
      </View>
    );
  }

  const Tab = createBottomTabNavigator();

  return (
    <LinearGradient style={STYLE.container} colors={[start.color, middle.color, end.color]}>

      <Nav/>
      <Status filter={filterTodoStatus}/>
      <Input register={register} inputChange={inputChange} input={input}/>
      <TodoContainer toggleSwitch={toggleSwitch} todo={filtered} updateItem={changeItem}/>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Settings" component=     {SettingsStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </LinearGradient>
  )
};

export default App


