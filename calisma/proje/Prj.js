import React from 'react';
import { SafeAreaView, Text, View} from 'react-native';


const App = () => {
    return(
        <SafeAreaView>
          <View>
            <View>
                <Text style ={styles.title}>News</Text>
            </View>

            <View>
                <img src='https://static.coindesk.com/wp-content/uploads/2020/10/BitMEX.png' alt="Logo" />
                <Text>Bulls Exit Bitmex Futures Market</Text>
                <Text>Cryptocurrency traders look to be unwinding long positions in bitcoin perpetual futures listed on crypto derivatives exchange BitMEX, which has been charged by regulators with facilitating illegal transactions in the U.S.</Text>
                <Text>News</Text>
            </View>

            <View>
                <img src='https://i.ytimg.com/vi/kj4hcEGNRZ8/hqdefault.jpg' alt='Logo' />
                <Text>Coinbase customers can now dodge a bank</Text>
                <Text>The U.S. friendly crypto platform now allows 40 different countries faster cash withdrawals, Coinbase wrote in a Oct. blog . "Customers in the U.S., U.K. and Europe can withdraw funds with a linked Visa (NYSE:V) debit card," the post said. </Text>
            </View>

            <View>
                <img src='https://www.arbeitsrecht-weltweit.de/wp-content/uploads/2018/09/GettyImages-485901830-720x340.jpg' alt='Logo' />
             </View>
          </View>  
        </SafeAreaView>
    )
} 

export default App;

const styles = Stylesheet.create({
    title: {
        fontSize: 20,
        fontWeight : 500,
    },
})