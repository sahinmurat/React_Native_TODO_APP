import axios from 'axios';
import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity } from 'react-native';

import { Button, RestaurantCard } from './pages2'

const Main = (props) => {
  const fetchRestaurant = () =>{
    return(
      alert('huhu')
    )
  }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <RestaurantCard />
                <Button title="Suggest New Restaurant"
                onNewRequest={()=> fetchRestaurant()} />
            </View>
        </SafeAreaView>
    );
}

export default Main;

// // const fetchData_Then = () => {
// //     axios.get('https://jsonplaceholder.typicode.com/users')
// //       .then(({ data }) => {
// //         setuserData(data);
// //       })
// //   }
// //   const fetchData_Await = async () => {
// //     const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
// //     setuserData(data);
// //   }
// {/* <Button title="Fetch Data" onPress={fetchData_Then} />
//         <Button title="Fetch Data" onPress={fetchData_Await} />
//         <FlatList
//           data={userData}
//           renderItem={({ item }) => <Text>{item.name}</Text>} /> */}
