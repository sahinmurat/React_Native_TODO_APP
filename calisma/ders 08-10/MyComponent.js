import React from "react";
import {View, Text, StyleSheet} from "react-native";
const MyComponent = () => {
    return (
        <View style={styles.container}>
            <Text>Hi, Everyone!</Text>
            <Text>Welcome to Clarusway App😎</Text>
            <View>
                <Text>Ready for FullStack Developer!</Text>
            </View>
        </View>
    ); 
};
export default MyComponent;
const styles = StyleSheet.create({
    container: {
        backgroundColor: "pink",
        margin: 5,
        padding: 10,
        borderWidth: 2,
        borderColor: "#e0e0e0",
        borderRadius: 10,
    }
})