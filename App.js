import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { BACKGROUND_COLOR, STYLE } from './component/Styles';
import Nav from './component/Nav';
import Status from './component/Status';
import Input from './component/Input';
import TodoContainer from './component/TodoContainer';
import { DONE, EVERY, WILL } from './component/Const';
import { View } from 'react-native';

export const Separator = () => <View style={styles.separator} />;

const App = () => {
  const { middle, start, end } = BACKGROUND_COLOR;

  const [input, setInput] = useState("Input what you are doing")
  const [update, setUpdate] = useState("");
  const [nextId, setNextId] = useState(3);
  const [todo, setTodo] = useState([
    { id: 1, text: "Hi I'm greet to meet you !", isDone: WILL },
    { id: 2, text: "Let's get Started to make your to do!", isDone: WILL }
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
    if(status === WILL) {
      return DONE;
    } else if (status === DONE) {
      return WILL;
    }
  }

  const changeTodoStatus = (id) => {
    const changedTodo = todo.map(item => item.id === id ? { ...item, isDone: reverseStatus(item.isDone) } : item);
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

  return (
    <LinearGradient style={STYLE.container} colors={[start.color, middle.color, end.color]}>

      <Nav/>
      <Status filter={filterTodoStatus}/>
      <Input register={register} inputChange={inputChange} input={input}/>
      <TodoContainer toggleSwitch={toggleSwitch} todo={filtered} updateItem={changeItem}/>

    </LinearGradient>
  )
};

export default App


