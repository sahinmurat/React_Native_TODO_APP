import * as React from 'react';
import { View, Text, Button, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import first1 from './component/first1';
import second1 from './component/second1';
import Islem from './component/Islem';


const Stack = createStackNavigator();

const App = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='first1'>
                <Stack.Screen name='first1' component={first1} />
                <Stack.Screen name='second1' component={second1} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;