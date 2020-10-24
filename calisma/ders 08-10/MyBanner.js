import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ImagePropTypes } from 'react-native';


// const MyBanner = (props) => {
// function control(){
//     if(props.isActive===true){
//         return 
//     }
//     else{
//         return <Text  >Aktif degil</Text>
//     }
// }


// {/* alttaki 3 sekilde de gözükür. ilki yukarida fonksiyon tanimla asagida cagir. diger tek satir fonk. sonuncusu ise && yapisi 1.function 2.turnary 3.And operator .... asagida 3 kez yazdirdi  */}
//                  <Text  >Aktif degil</Text>
//                 {control()}
//                 {props.isActive ? null : <Text>Aktif degil</Text>}
//                 {!props.isActive && <Text>Aktif degil</Text>}



const MyBanner = (props) => {
    return (
      <View style={[styles.container, {backgroundColor: props.color}]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <Text style={styles.text}>{props.title}</Text>
            <Text>{props.desc}</Text>
          </View>
          {!props.isActive && <Text>Aktif Değil</Text>}
        </View>
      </View>
    );
  };
  export default MyBanner;
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#eceff1',
      padding: 10,
      margin: 10,
      borderRadius: 5,
    },
    text: {
      fontWeight: 'bold',
      fontSize: 25,
    },
  });