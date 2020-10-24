// 
import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, ScrollView } from 'react-native';


const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <Text style={[styles.text, {color:'blue'}]}>Clarusway</Text>
        <Text style={[styles.text, styles.text_2]}>Clarusway</Text>

      </View>
     

       
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
 container: {
  
  },
  text: {color:'yellow',
  fontSize:40
    
  },
  text_2: {color:'brown'
  }
})