import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import MyComponent from './components/MyComponent'

/**
 * style=""
 * style={}
 * 
 * attribute={}
 * 
 * Inline Style (!)
 *    <View style={{
        backgroundColor: 'purple',
        padding: 10,
        margin: 20,
      }}>
 */

 

const App = () => {
  const my_name = 'Askin Ekinci';
  const isAdmin = true;

  function myFunction(){
    return (
    <View>
    <Text style={styles.hello}>Hello Clarusway!</Text>
    <Text style={styles.hello}>Hello Clarusway!</Text>
    <Text style={styles.hello}>Hello Clarusway!</Text>
    </View>
    )}

  function myFunction_2(){
    const isAdmin = false;

    if(isAdmin){
      return <Text>Admin kullanicisi</Text>;
    }
    return null
  }

  function myFunction_3(){
    const myArray = ['Izmir', 'Istanbul', 'Ankara', 'Adana'];
    return myArray.map((city) => {
      return <Text style={{fontSize:30}}>{city}</Text>
    })    
    };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>CLARUSWAY!</Text>
      </View>

      <MyComponent />

      {myFunction_3()}

      {myFunction()}

      {/* {myFunction_2()} */}

      {isAdmin ? <Text style={{fontSize:30}}>Admin kullanicisi</Text> : null}

      {/* {isAdmin && <Text style={{fontSize:30}}>Admin kullanicisi</Text>} */}


      {/* <Text style={styles.hello}>Hosgeldin {my_name} </Text>

      <Text style={styles.hello}>Sonuc {4 + 5}</Text> */}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    padding: 10,
    margin: 20,
    borderRadius: 15,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
  },
  hello: {
    fontSize: 30,
    margin: 20,
  }
});
