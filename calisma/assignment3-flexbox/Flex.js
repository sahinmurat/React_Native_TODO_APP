import React from 'react';
import { View, StyleSheet, SafeAreaView,Text } from 'react-native';


const News = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.first}>
          <View style={styles.first_a}>
            <View style={styles.first_aa}><Text style={{color:'black'}}>Orange Circle </Text></View>
            <View style={styles.first_ab}><Text>Yellow Box </Text></View>
          </View>
        </View>
        <View style={styles.second}>
          <View style={styles.second_a}><Text style={{color:'white'}}>Black Box </Text></View>
          <View style={styles.second_b}><Text style={{color:'white', transform: [{ rotate: '-90deg' }]}}>Brown Box </Text></View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default News

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  },
  first: {
    flex: 1,
    backgroundColor: 'red'
  },
  first_a: {
    flex: 1,
    backgroundColor: 'gray',
    flexDirection: 'row',
    margin: 20,
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  first_aa: {
    backgroundColor: 'orange',
    width: 90,
    height: 90,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',


  },
  first_ab: {
    backgroundColor: 'yellow',
    borderRadius: 10,
    width: 70,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',

  },
  second: {
    flex: 2,
    backgroundColor: 'pink',
    justifyContent: "space-between",
    flexDirection: 'row',
  },
  second_a: {
    backgroundColor: 'black',
    flex: 7,
    color: 'white',
    margin:20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  second_b: {
    backgroundColor: 'brown',
    flex: 2,
    color: 'white',
    margin:20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

})