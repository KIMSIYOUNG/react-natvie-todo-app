import { BACKGROUND_COLOR, STYLE } from './Styles';
import React, { useState } from 'react';
import { DONE, EVERY, WILL } from './Const';
import Nav from './Nav';
import Status from './Status';
import Input from './Input';
import TodoContainer from './TodoContainer';
import { LinearGradient } from 'expo-linear-gradient';

const TodoApp = () => {
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

    return (
      <LinearGradient style={STYLE.container} colors={[start.color, middle.color, end.color]}>
        <Nav/>
        <Status filter={filterTodoStatus}/>
        <Input register={register} inputChange={inputChange} input={input}/>
        <TodoContainer toggleSwitch={toggleSwitch} todo={filtered} updateItem={changeItem}/>
      </LinearGradient>
    )
}

export default TodoApp;