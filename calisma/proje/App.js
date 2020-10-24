// import React from 'react';
// import {SafeAreaView,View,Text,StyleSheet,} from 'react-native';
// import MyComponent from "./components/MyComponent"

// //  <View style={{ //inline style ama tercih edilmiyor okunabilirliği az
// //         backgroundColor:"cyan",
// //         margin:20,
// //         padding:10,
// //       }}> 
// //         <Text>CLARUSWAY</Text>
// //       </View>

// function myFunction2() {
//   const isAdmin = true;
//   // if (isAdmin) {
//   //   return  <Text style={styles.user}>Admin User</Text>;
//   // } else {
//   //   return <Text style={styles.user}>Member User</Text>;
//   // }
//    return isAdmin ? <Text style={styles.user}>Admin User</Text> : null //bu şekilde de yazabilirim ternary, veya function içinde de kullanabilirim
//   //const myArray = ["İzmir", "İstanbul", "Ankara", "Adana"];
//   // return myArray.map(city => {
//   //  return<Text>{city}</Text>;
//   // })
//   //return <Text>{userName}</Text>;
// }
// const App = () => {
//   const my_name = "Murat";
//   // const isAdmin = true;
//   function myFunction(){
//     return <Text style={styles.meet}>We are pleased to meet you</Text>;
//   }
//   return (
//       <SafeAreaView>
//         <View style={styles.container}> 
//           <Text style={styles.text}>CLARUSWAY</Text>
//         </View>
//         <MyComponent />
//         {/* {isAdmin ? <Text style={styles.user}>Admin User</Text> : null} 
//         {isAdmin && <Text style={styles.user}>Admin User</Text>} */}
//          {/* yukarıdaki veya bu satırdaki gibi de kullanabiliriz */}
//         <Text style={styles.hello}>Welcome {my_name}</Text>
//         {myFunction2()}
//         {myFunction()}
//       </SafeAreaView>
//   );
// };
// export default App;
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "purple",
//     padding:10,
//     margin:20,
//     borderRadius: 15,
//     fontSize: 20,
//     textAlign: "center",
//   },
//   text: {
//     color: "black",
//     fontSize: 35,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   hello: {
//     fontSize: 25,
//     textAlign: "center",
//     margin:20,
//   },
//   meet: {
//     fontSize: 20,
//     textAlign: "center",
//   },
//   user: {
//     fontSize: 20,
//     textAlign: "center",
//   }
// })



/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
//   @format
 * @flow strict-local
 */
// facebook yoga kullaniliyor flex icin
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,

  View,
  Text,TextInput

} from 'react-native';


const App = () => {
  return (
<SafeAreaView  >
  <View> 
  {/* <View style={{backgroundColor:'blue', flex:1, flexDirection:'row'}}>
    <View style={{backgroundColor:'brown'}}></View>
    <View style={{backgroundColor:'orange'}}></View>
  </View>
  <View style={{backgroundColor:'white'}}></View>
  <View style={{backgroundColor:'pink'}}></View>
  <View style={{backgroundColor:'red'}}></View> */}
  <TextInput style={{
    backgroundColor:'yellow',
    padding:10,
    margin:10
    }}/>
  </View>
</SafeAreaView>

  )};
export default App;
// justiyf y ekseninde, align items x ekseninde hareket ettirir.