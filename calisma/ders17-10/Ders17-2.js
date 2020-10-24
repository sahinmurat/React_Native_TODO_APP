import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import prodctData from '../../src/produkt_data.json'
import MyComponent from '../../src/components/MyComponent'


const App = () => {
    const renderListItem = ({ item }) =>  <MyComponent product={item} /> 
   
    return (
        <View>
            <Text>afafa</Text>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={prodctData}
                renderItem={renderListItem}
                numColumns={2}
            />
        </View>
    )
}
export default App;

