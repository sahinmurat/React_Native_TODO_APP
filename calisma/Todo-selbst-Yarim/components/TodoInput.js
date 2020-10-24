import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, FlatList, TouchableOpacity, Button, Image, Alert, TextInput } from 'react-native';
import { todo_input } from '../styles';


const TodoInput = (props) => {
    const [text, settext] = useState('')
    return (
        <View style={todo_input.container}>
            <View style={todo_input.inputContainer}>
                <TextInput 
                onChangeText={(value)=>settext(value)}
                />
            </View>
            <TouchableOpacity
            onPress={()=>props.onTodoEnter(text)}
            style={todo_input.touch}>
                <Text style={todo_input.buttonText}>Todo Input</Text>
            </TouchableOpacity>

        </View>
    )
}
export default TodoInput;