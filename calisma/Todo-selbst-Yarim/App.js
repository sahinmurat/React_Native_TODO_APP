import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Text, SafeAreaView, StyleSheet, View, FlatList, Button, Image, Alert } from 'react-native';
import { main } from './styles';
import TodoInput from './components/TodoInput'
import TodoCard from './components/TodoCard'

/**
 * #303e45
 * #a7b6bd
 * #4a636e
 * #ff9b31
 */

const News = () => {
  const [list, setlist] = useState([])

  function addTodo(huhu) {
    const element = {
      id: list.length,
      todo: huhu, /* burasi kisa versiyon von todo : text */
      isDone: false
    }
    const newArray = [element, ...list]

    setlist(newArray);
    // console.log(newArray)

    // ...list demeseydik her newArray degisikliginde benim listimde degisecekti ama onu bu sekilde degistiremeyiz ve degistirmek de istemiyoruz. bu arada...list onu buraya kopyala demek.
    // newArray.push(element)
    // kisayol ise su: const newArray = [...list, element] dersek pusha gerek yok
  }

  // const renderItem= ()=>{
  //   return(

  //   )
  // }
  const renderTodo = ({ item }) => <TodoCard data={item} />
// const renderTodo = ({ item }) => <Text>{item.todo}</Text>
  return (

    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={main.container}>
        <View style={main.banner} >
          <Text style={main.todoText}>TODO </Text>
          <Text style={main.todoCount}>{list.length} </Text>
        </View>
        <FlatList
          // keyExtractor={}
          data={list}
          renderItem={renderTodo}

        />

        <TodoInput
          onTodoEnter={huhu => addTodo(huhu)}
        />
        {/* <Text>{list}</Text> */}

      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
export default News;



