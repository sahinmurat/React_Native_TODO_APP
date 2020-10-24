import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, FlatList, TouchableOpacity, Button, Image, Alert, TextInput } from 'react-native';

const TodoCard = (props) =>{
    return(
        <TouchableOpacity
            style={todo_card.container}
            onPress={() => props.onDone()}
            onLongPress={() => props.onRemove()}
        >
            <Text style={[
                todo_card.text,
                { textDecorationLine: props.data.isDone ? 'line-through' : null }
            ]}>{props.data.todo}</Text>
        </TouchableOpacity>
    
    )
}

export default TodoCard;