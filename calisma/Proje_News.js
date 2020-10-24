// 
import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, ScrollView } from 'react-native';


const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>

        <View>
          <Text style={styles.title}> News </Text>
        </View>

        <View style={styles.first}>
          <Image source={require('./img/trm.jpg')} style={{ width: 400, height: 250}} />

          <Text>President Donald Trump has had no Covid-19 symptoms for more than 24 hours and has been fever-free for more than four days, his doctor says.</Text>

          <Text>Sean Conley also said the president had not needed any supplemental oxygen since going to hospital on Friday. He was discharged on Monday.Mr Trump said he "felt great!" and later returned to the Oval Office for briefings, the White House said.</Text>
        </View>

        <View>
          <Image source={require('./img/image18.jpg')} style={{ width: 400, height: 250 }} />
          <Image source={require('./img/image18.jpg')} style={{ width: 400, height: 250 }} />
          <Text>Coinbase customers can now dodge a bank</Text>
          <Text>The U.S. friendly crypto platform now allows 40 different countries faster cash withdrawals, Coinbase wrote in a Oct. blog . "Customers in the U.S., U.K. and Europe can withdraw funds with a linked Visa (NYSE:V) debit card," the post said. </Text>
        </View>

        <View>
          {/* <Img><img src='https://www.arbeitsrecht-weltweit.de/wp-content/uploads/2018/09/GettyImages-485901830-720x340.jpg' alt='Logo' /></Img> */}
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  title: {
    fontSize: 70,
    fontWeight: '700',
    marginTop:20,
    marginBottom:20
  },
  first: {
    borderWidth:2,
    margin:10,
    borderRadius:10

  }
})