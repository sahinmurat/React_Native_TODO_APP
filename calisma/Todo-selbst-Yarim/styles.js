import { Text, SafeAreaView, StyleSheet, View, FlatList, Button, Image, Alert, Dimensions } from 'react-native';

const main = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#303e45'
    },
    banner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'red',
        alignItems: 'center'
    },
    todoText: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#ff9b31'
    },
    todoCount: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#ff9b31'
    }
})

const todo_input = StyleSheet.create({
    inputContainer:{
        backgroundColor:'lightyellow',
        padding:10,
        margin:5,
        borderRadius:10
    },
    container:{
        backgroundColor:'#a7b6ed',
        padding:10,
        margin:10,
        borderRadius:5
    },
    touch:{
        backgroundColor:'lightblue',
        padding:10,
        margin:10,
        borderRadius:5,
        // marginHorizontal:10,
        // width:Dimensions.get('window') * 0.4,
        // alignSelf:'center'
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        textAlign:'center'
    }
})
export {main, todo_input}