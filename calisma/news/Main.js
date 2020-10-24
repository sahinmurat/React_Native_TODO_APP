import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView } from 'react-native';


const Main = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <Text style={styles.title}>News</Text>
      <View style={styles.view}>
        <Image source={require('./img/trm.jpg')}
          style={styles.picture} />
        <Text style={styles.title}>Top seed Novak Djokovic withstood a gutsy fightback from Gree.</Text>
        <Text>Top seed Novak Djokovic withstood a gutsy fightback from Greek fifth seed Stefanos Tsitsipas to set up a French Open final against long-time rival Rafael Nadal on Sunday</Text>
      </View>
      <View style={styles.view}>
        <Image source={require('./img/trm.jpg')}
          style={styles.picture} />
        <Text style={styles.title}>Top seed Novak Djokovic withstood a gutsy fightback from Gree.</Text>
        <Text>Top seed Novak Djokovic withstood a gutsy fightback from Greek fifth seed Stefanos Tsitsipas to set up a French Open final against long-time rival Rafael Nadal on Sunday</Text>
      </View><View style={styles.view}>
        <Image source={require('./img/trm.jpg')}
          style={styles.picture} />
        <Text style={styles.title}>Top seed Novak Djokovic withstood a gutsy fightback from Gree.</Text>
        <Text>Top seed Novak Djokovic withstood a gutsy fightback from Greek fifth seed Stefanos Tsitsipas to set up a French Open final against long-time rival Rafael Nadal on Sunday</Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5

  },
  picture: {
    borderRadius: 15,
    width: 300,
    height: 300,
    alignSelf: 'center',
    margin: 10


  },
  view: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    padding: 10,
    margin: 5,
    // flex:1,
    backgroundColor: 'lightgray'
  },

})