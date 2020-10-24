import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

const App = (props) => {
    
    let selectedColor = props.color;
    if (props.color === undefined)
        selectedColor = 'red'
    console.log(props);
    return (
        <View>
            {/* <TouchableOpacity style={[styles.touch, {backgroundColor:props.color}]}> */}
            {/* <TouchableOpacity style={[styles.touch, 
                {backgroundColor: props.color === undefined ? 'yellow' : props.color}
                ]}>
                    /TouchableOpacity> */}

            <TouchableOpacity
                style={[styles.touch, { backgroundColor: selectedColor }]}
                onPress={props.sayingHello}>
                <Text>{props.banner}</Text>
            </TouchableOpacity>

        </View>
    )
}
export default App;

const styles = StyleSheet.create({
    text1: {
        fontSize: 32,
        alignItems: 'center',
        margin: 10,
        justifyContent: 'center'
    },
    touch: {
        backgroundColor: 'lightblue',
        margin: 10,
        padding: 10,
        alignItems: 'center'
    }

})
